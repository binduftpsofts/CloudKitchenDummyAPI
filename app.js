const express = require('express');
const config = require('./config/app.config');
const corsMiddleware = require('./middleware/cors.middleware');
const requestLoggerMiddleware = require('./middleware/request.middleware');
const { errorHandler, notFoundHandler } = require('./middleware/error.middleware');
const logger = require('./utils/logger.util');
const path = require('path');

const app = express();

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Global Middlewares
app.use(corsMiddleware);
app.use(requestLoggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const ordersRoutes = require('./routes/orders');
const chefRoutes = require('./routes/chef');

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    environment: config.server.env,
    timestamp: new Date().toISOString(),
  });
});

// ২. API Documentation Route (EJS version)
app.get('/api/v1', (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}${config.api.prefix}`;
  res.render('docs', { config, baseUrl });
});

// Root redirect or simple message
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'HomeChef API Mock Server is running.',
    docs: `${req.protocol}://${req.get('host')}/api/v1`
  });
});

// Mount API routes
app.use(`${config.api.prefix}/auth`, authRoutes);
app.use(`${config.api.prefix}/user`, userRoutes);
app.use(`${config.api.prefix}/user/orders`, ordersRoutes);
app.use(`${config.api.prefix}/chef`, chefRoutes);

// Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

const startServer = (port = config.server.port) => {
  if (config.server.isDevelopment) {
    app.listen(port, () => {
      logger.info('🚀 Server started', { port });
      logger.info('📖 API Documentation:', `http://localhost:${port}/api/v1`);
    });
  } else {
    logger.info('✅ App exported for serverless deployment');
  }
};

module.exports = { app, startServer };