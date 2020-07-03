/** Custom error handling middlewares for use in express with helper error utils  */

import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import HttpError from '../services/errorService';
import { logger } from '../utils/logger';

/**
 * Flag to determine if error is an operational error and should be handled properly
 *
 * @param {HttpError} err
 * @returns
 */
function isTrustedError(err: HttpError) {
  if (err instanceof HttpError) {
    return err.isOperational;
  }
  return false;
}

/**
 * Generic error handling middleware
 *
 * @param {*} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
  logger.error(JSON.stringify(error));

  if (!error.isOperational) {
    return process.exit();
  }

  res.status(error.httpCode).json(error);
}

/**
 * Error handling middleware for page not found
 *
 * @param {Request} req
 * @param {Response} res
 */
function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  res.json(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
}

export { isTrustedError, errorMiddleware, notFoundHandler };
