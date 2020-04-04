import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI } from './utils/secrets';

// Create Express server
const app = express();

// Connect to database
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database ready');
  })
  .catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
  });

app.set('port', process.env.PORT || 5200);

export default app;
