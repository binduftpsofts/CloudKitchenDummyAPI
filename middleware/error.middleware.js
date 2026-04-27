/**
 * Error Handling Middleware
 * Global error handler for all routes
 */

const logger = require('../utils/logger.util');
const { sendError } = require('../utils/response.util');

const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled Error:', err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  sendError(res, message, statusCode, {
    code: err.code || 'INTERNAL_ERROR',
    details: process.env.NODE_ENV === 'development' ? err.stack : null,
  });
};

/**
 * 404 Not Found Middleware
 * Handle routes that don't exist
 */
const notFoundHandler = (req, res) => {
  sendError(res, `Route not found: ${req.method} ${req.path}`, 404, {
    code: 'ROUTE_NOT_FOUND',
  });
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
