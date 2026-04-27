/**
 * Logger Utility
 * Centralized logging functionality
 */

const logger = {
  info: (message, data = '') => {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data);
  },

  error: (message, error = '') => {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  },

  warn: (message, data = '') => {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data);
  },

  debug: (message, data = '') => {
    if (process.env.DEBUG) {
      console.log(`[DEBUG] ${new Date().toISOString()} - ${message}`, data);
    }
  },

  request: (req) => {
    console.log(`[REQUEST] ${req.method} ${req.path}`);
  },
};

module.exports = logger;
