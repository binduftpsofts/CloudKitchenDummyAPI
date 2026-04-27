/**
 * Express App Configuration & Initialization
 * Central place to setup all middlewares and routes
 */

const express = require('express');
const config = require('./config/app.config');
const corsMiddleware = require('./middleware/cors.middleware');
const requestLoggerMiddleware = require('./middleware/request.middleware');
const { errorHandler, notFoundHandler } = require('./middleware/error.middleware');
const logger = require('./utils/logger.util');

// Initialize Express app
const app = express();

/**
 * Global Middlewares
 */
// CORS middleware
app.use(corsMiddleware);

// Request logger
app.use(requestLoggerMiddleware);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const ordersRoutes = require('./routes/orders');

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
    environment: config.server.env,
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'HomeChef API Mock Server is running.',
    version: config.api.version,
    docs: `${req.protocol}://${req.get('host')}/api/v1`,
  });
});

// API Documentation
app.get('/api/v1', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HomeChef API Documentation</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; line-height: 1.6; color: #333; background: #f5f5f5; }
          .container { max-width: 1000px; margin: auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
          h1 { color: #2c3e50; border-bottom: 3px solid #e67e22; padding-bottom: 15px; margin-bottom: 20px; }
          h2 { color: #e67e22; margin-top: 30px; border-left: 5px solid #e67e22; padding-left: 15px; }
          h3 { color: #2980b9; margin-top: 20px; font-size: 1.1em; }
          table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 25px; }
          th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
          th { background-color: #f8f9fa; font-weight: bold; color: #2c3e50; }
          tr:hover { background-color: #f9f9f9; }
          code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace; font-size: 0.9em; }
          pre { background: #2d3436; color: #dfe6e9; padding: 15px; border-radius: 6px; overflow-x: auto; font-size: 0.85em; margin: 10px 0; }
          .method { font-weight: bold; padding: 2px 8px; border-radius: 4px; display: inline-block; }
          .method.post { color: #fff; background: #27ae60; }
          .method.get { color: #fff; background: #3498db; }
          .method.put { color: #fff; background: #f39c12; }
          .method.delete { color: #fff; background: #e74c3c; }
          .badge { display: inline-block; background: #ecf0f1; padding: 4px 10px; border-radius: 20px; font-size: 0.85em; margin: 5px 0; }
          .info-box { background: #ecf0f1; border-left: 4px solid #3498db; padding: 15px; margin: 20px 0; border-radius: 4px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🍳 HomeChef Cloud API Documentation</h1>
          <p><strong>Base URL:</strong> <code>${config.api.baseUrl}/api/v1</code></p>
          <p><strong>Environment:</strong> <code>${config.server.env}</code></p>
          
          <div class="info-box">
            <strong>📝 Note:</strong> This is a mock API server for development and testing purposes. All responses are mocked data.
          </div>

          <h2>1. Authentication Module</h2>
          <table>
            <tr>
              <th>Endpoint</th>
              <th>Method</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><code>/auth/send-otp</code></td>
              <td><span class="method post">POST</span></td>
              <td>Request OTP for phone login</td>
            </tr>
            <tr>
              <td><code>/auth/verify-otp</code></td>
              <td><span class="method post">POST</span></td>
              <td>Verify OTP and return session token</td>
            </tr>
            <tr>
              <td><code>/auth/resend-otp</code></td>
              <td><span class="method post">POST</span></td>
              <td>Resend OTP if not received</td>
            </tr>
          </table>

          <h2>2. User Module</h2>
          <table>
            <tr>
              <th>Endpoint</th>
              <th>Method</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><code>/user/home</code></td>
              <td><span class="method get">GET</span></td>
              <td>Initial dashboard data</td>
            </tr>
            <tr>
              <td><code>/user/meals</code></td>
              <td><span class="method get">GET</span></td>
              <td>List all meals</td>
            </tr>
            <tr>
              <td><code>/user/meals/search</code></td>
              <td><span class="method get">GET</span></td>
              <td>Search meals with query parameter</td>
            </tr>
            <tr>
              <td><code>/user/meals/:id</code></td>
              <td><span class="method get">GET</span></td>
              <td>Get specific meal details</td>
            </tr>
            <tr>
              <td><code>/user/profile</code></td>
              <td><span class="method get">GET</span></td>
              <td>Get user profile</td>
            </tr>
            <tr>
              <td><code>/user/profile</code></td>
              <td><span class="method put">PUT</span></td>
              <td>Update user profile</td>
            </tr>
          </table>

          <h2>3. Orders Module</h2>
          <table>
            <tr>
              <th>Endpoint</th>
              <th>Method</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><code>/user/orders</code></td>
              <td><span class="method post">POST</span></td>
              <td>Place new order</td>
            </tr>
            <tr>
              <td><code>/user/orders</code></td>
              <td><span class="method get">GET</span></td>
              <td>Get order history</td>
            </tr>
            <tr>
              <td><code>/user/orders/:id</code></td>
              <td><span class="method get">GET</span></td>
              <td>Track specific order</td>
            </tr>
          </table>

          <h2>4. Standard Response Format</h2>
          <h3>Success Response</h3>
          <pre>{
  "success": true,
  "message": "Operation successful",
  "data": { ... },
  "timestamp": "2026-04-27T10:00:00.000Z"
}</pre>

          <h3>Error Response</h3>
          <pre>{
  "success": false,
  "message": "Error message",
  "error": { ... },
  "timestamp": "2026-04-27T10:00:00.000Z"
}</pre>

          <h2>5. Getting Started</h2>
          <p>Test the API using curl or any REST client:</p>
          <pre>curl -X GET ${config.api.baseUrl}/health</pre>
          
          <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 0.9em;">
            <strong>HomeChef API</strong> | Version ${config.api.version} | Last Updated: 2026-04-27
          </p>
        </div>
      </body>
    </html>
  `);
});

// Mount API routes
app.use(\`\${config.api.prefix}/auth\`, authRoutes);
app.use(\`\${config.api.prefix}/user\`, userRoutes);
app.use(\`\${config.api.prefix}/user/orders\`, ordersRoutes);

/**
 * Error Handling Middlewares (must be last)
 */
// 404 Not Found handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

/**
 * Server Initialization
 */
const startServer = (port = config.server.port) => {
  if (config.server.isDevelopment) {
    app.listen(port, () => {
      logger.info('🚀 Server started', { port, environment: config.server.env });
      logger.info('📖 API Documentation:', \`http://localhost:\${port}/api/v1\`);
    });
  } else {
    logger.info('✅ App exported for serverless deployment');
  }
};

module.exports = { app, startServer };
