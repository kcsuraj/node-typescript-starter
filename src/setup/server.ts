import config from '../config/env';
import { Application } from 'express';

export default function (app: Application) {
  console.log('Starting server');

  app.set('port', config.port || 8000);

  app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  });
}
