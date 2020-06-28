import express, { Application } from 'express';
import { setupLoadModules, setupDatabase, setupServer } from './setup';

// Create Express server
const app: Application = express();

// Setup load modules
setupLoadModules(app);

// Setup database
setupDatabase();

// Setup server
setupServer(app);
