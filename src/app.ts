import express, { Application } from 'express';
import { setupLoadModules, setupDatabase, setupServer, setupErrorHandler } from './setup';

// Create Express server
const app: Application = express();

// Setup load modules
setupLoadModules(app);

// Setup database
setupDatabase();

// Setup error handlers
setupErrorHandler(app);

// Setup server
setupServer(app);
