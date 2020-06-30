import { Application, Router } from 'express';
import routes from '../app/routes/baseRoutes';

/**
 * Setup error handlers in express
 * @param {Application} app
 */
export default function (app: Application) {
  /**
   * Check status of api
   */
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  // Handle api routes
  app.use('/api', routes);
}
