/**
 * HomeChef API Server
 * Entry point for the Express application
 */

const { app, startServer } = require('./app');

/**
 * Start server if not in production (Vercel serverless)
 */
if (process.env.NODE_ENV !== 'production') {
  startServer();
}

/**
 * Export app for Vercel serverless functions and testing
 */
module.exports = app;
