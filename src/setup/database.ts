import mongoose from 'mongoose';
import env from '../config/env';

const { db } = env;

/**
 * Connect to database
 */
export default function () {
  mongoose.connect(`${db.uri}/${db.name}`, { useNewUrlParser: true, useUnifiedTopology: true });

  const connection = mongoose.connection;

  connection.on('error', console.error.bind(console, 'connection error:'));
  connection.once('open', () => {
    console.log('Database Connected');
  });
}
