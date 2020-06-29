import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';
import AppError from '../errors/appError';

function isTrustedError(err: Error) {
  if (err instanceof AppError) {
    return err.isOperational;
  }
  return false;
}

function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
  // TODO Add error logger

  if (!error.isOperational) {
    return process.exit();
  }

  res.status(error.httpCode).json(error);
}

function notFoundHandler(req: Request, res: Response) {
  res.json(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
}

export { isTrustedError, errorMiddleware, notFoundHandler };