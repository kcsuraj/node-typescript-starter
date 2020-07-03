import { Application } from 'express';
import { isTrustedError, errorMiddleware, notFoundHandler } from '../middlewares/errors';
import { logger } from '../utils/logger';

/**
 * Setup error handlers in express
 * @param {Application} app
 */
export default function (app: Application) {
  logger.info('Setting up error handlers');

  // error handler middlewares
  app.use(errorMiddleware);
  app.use(notFoundHandler);

  // get the unhandled rejection and throw it to another fallback handler we already have.
  process.on('unhandledRejection', (error) => {
    throw error;
  });

  // Handle uncaught exceptions
  process.on('uncaughtException', (error: any) => {
    logger.error(error.message);

    if (!isTrustedError(error)) {
      process.exit(1);
    }
  });
}
