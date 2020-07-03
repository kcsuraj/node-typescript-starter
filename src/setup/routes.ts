import { Application, Router } from 'express';
import routes from '../routes';
import { logger } from '../utils/logger';

/**
 * Setup error handlers in express
 * @param {Application} app
 */
export default function (app: Application) {
  logger.info('Setting up application routes');
  /**
   * Check status of api
   */
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  // Handle api routes
  app.use('/api', routes);
}
