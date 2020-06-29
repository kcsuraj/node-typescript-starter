import { Application, Request, Response, NextFunction } from 'express';
import { handleError, isTrustedError } from '../errors';
import HttpStatusCode from '../config/httpStatusCode';

export default function (app: Application) {
  // error handler middleware
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    const errorValue = handleError(error);
    return res.status(errorValue.code).json(errorValue);
  });

  // get the unhandled rejection and throw it to another fallback handler we already have.
  process.on('unhandledRejection', (error: Error, promise: Promise<any>) => {
    throw error;
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (error: Error) => {
    // handleError(error);
    if (!isTrustedError(error)) {
      console.log('not trusted error');
      process.exit(1);
    }
  });
}
