/**
 * Request Logger Middleware
 * Log all incoming requests
 */

const logger = require('../utils/logger.util');

const requestLoggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  logger.info(`${req.method} ${req.path}`, { timestamp });

  // Capture response time
  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    logger.info(`${req.method} ${req.path} - ${res.statusCode}`, {
      duration: `${duration}ms`,
    });
  });

  next();
};

module.exports = requestLoggerMiddleware;
