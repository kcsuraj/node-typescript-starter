import mongoose from 'mongoose';
import env from '../config/env';
import { logger } from '../utils/logger';

const { db } = env;

const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true };

/**
 * Connect to database
 */
export default function () {
  mongoose.connect(`${db.uri}/${db.name}`, mongooseOptions);

  const connection = mongoose.connection;

  connection.on('error', () => {
    logger.error('Database connection error');
  });
  connection.once('open', () => {
    logger.info('Database Connected');
  });
}
