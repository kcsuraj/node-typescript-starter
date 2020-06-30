/**
 * Entry point to the application
 */
import express, { Application } from 'express';
import { setupLoadModules, setupDatabase, setupServer, setupErrorHandler, setupRoutes } from './setup';

console.log('hello world');
// Create Express server
const app: Application = express();

// Setup load modules
setupLoadModules(app);

// Setup database
setupDatabase();

// Setup routes
setupRoutes(app);

// Setup error handlers
setupErrorHandler(app);

// Setup server
setupServer(app);
