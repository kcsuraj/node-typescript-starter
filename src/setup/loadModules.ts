import { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { logger } from '../utils/logger';

export default function (app: Application) {
  console.info('Setting up modules');

  // Enable cors
  app.use(cors());

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  //  Request body cookie parser
  app.use(cookieParser());

  // HTTP request logger
  if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
  }
}
