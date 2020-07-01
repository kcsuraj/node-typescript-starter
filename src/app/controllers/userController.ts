import { Request, Response, NextFunction, response } from 'express';
import * as userService from '../services';
import HttpStatus from 'http-status-codes';

/**
 * Handle /users POST request.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await userService.createUser(req.body);
    res.status(HttpStatus.OK).json(data);
  } catch (error) {
    next(error);
  }
}

export { createUser };
