import dotenv from 'dotenv';
// Load.env
dotenv.config();

export default {
  db: {
    uri: process.env.DB_URI,
    name: process.env.DB_NAME
  },
  port: process.env.PORT
};
