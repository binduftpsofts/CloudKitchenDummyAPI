/**
 * CORS Middleware
 * Centralized CORS configuration
 */

const cors = require('cors');
const config = require('../config/app.config');

const corsMiddleware = cors({
  origin: config.cors.origin,
  credentials: config.cors.credentials,
  methods: config.cors.methods,
  allowedHeaders: config.cors.allowedHeaders,
  optionsSuccessStatus: 200,
});

module.exports = corsMiddleware;
