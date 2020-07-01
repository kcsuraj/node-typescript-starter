import { Application } from 'express';
import { isTrustedError, errorMiddleware, notFoundHandler } from '../middlewares/errors';

/**
 * Setup error handlers in express
 * @param {Application} app
 */
export default function (app: Application) {
  console.log('Setting up error handlers');

  // error handler middlewares
  app.use(errorMiddleware);
  app.use(notFoundHandler);

  // get the unhandled rejection and throw it to another fallback handler we already have.
  process.on('unhandledRejection', (error) => {
    throw error;
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (error: any) => {
    if (!isTrustedError(error)) {
      process.exit(1);
    }
  });
}
