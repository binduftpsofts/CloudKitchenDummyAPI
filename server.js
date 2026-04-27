const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const ordersRoutes = require('./routes/orders');

// Route Middlewares
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/user/orders', ordersRoutes); // Will register /api/v1/user/orders here

// Root Endpoint
app.get('/', (req, res) => {
  res.send('HomeChef API Mock Server is running.');
});

app.get('/api/v1', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>HomeChef API Documentation</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; line-height: 1.6; color: #333; max-width: 900px; margin: auto; }
          h1 { color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px; }
          h2 { color: #e67e22; margin-top: 30px; border-left: 5px solid #e67e22; padding-left: 10px; }
          h3 { color: #2980b9; margin-top: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; }
          th, td { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; }
          th { background-color: #f8f9fa; font-weight: bold; }
          code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; font-family: 'Courier New', Courier, monospace; font-size: 0.9em; }
          pre { background: #2d3436; color: #dfe6e9; padding: 15px; border-radius: 6px; overflow-x: auto; font-size: 0.85em; }
          .method { font-weight: bold; color: #27ae60; }
        </style>
      </head>
      <body>
        <h1>HomeChef Cloud API Documentation</h1>
        <p><strong>Base URL:</strong> <code>https://api.homechef.cloud/api/v1</code></p>

        <h2>1. Authentication Module</h2>
        <table>
          <tr><th>Endpoint</th><th>Method</th><th>Description</th></tr>
          <tr><td><code>/auth/send-otp</code></td><td><span class="method">POST</span></td><td>Request OTP for phone login</td></tr>
          <tr><td><code>/auth/verify-otp</code></td><td><span class="method">POST</span></td><td>Verify OTP and return session token</td></tr>
          <tr><td><code>/auth/resend-otp</code></td><td><span class="method">POST</span></td><td>Resend OTP if not received</td></tr>
        </table>

        <h2>2. User Module</h2>
        <table>
          <tr><th>Endpoint</th><th>Method</th><th>Description</th></tr>
          <tr><td><code>/user/home</code></td><td><span class="method">GET</span></td><td>Initial dashboard data (Categories, Featured, Initial Meals)</td></tr>
          <tr><td><code>/user/meals</code></td><td><span class="method">GET</span></td><td>List of all meals with filtering/search/pagination</td></tr>
          <tr><td><code>/user/meals/:id</code></td><td><span class="method">GET</span></td><td>Detailed information for a specific meal</td></tr>
          <tr><td><code>/user/chefs/:id</code></td><td><span class="method">GET</span></td><td>Public profile of a chef including their active meals</td></tr>
          <tr><td><code>/user/profile</code></td><td><span class="method">GET</span></td><td>Current logged-in user profile details</td></tr>
          <tr><td><code>/user/profile</code></td><td><span class="method">PUT</span></td><td>Update user profile information</td></tr>
          <tr><td><code>/user/orders</code></td><td><span class="method">GET</span></td><td>History of user orders</td></tr>
          <tr><td><code>/user/orders</code></td><td><span class="method">POST</span></td><td>Place a new order (Checkout)</td></tr>
          <tr><td><code>/user/orders/:id</code></td><td><span class="method">GET</span></td><td>Real-time tracking and status for an order</td></tr>
          <tr><td><code>/user/wallet</code></td><td><span class="method">GET</span></td><td>User balance and transaction history</td></tr>
          <tr><td><code>/user/complaints</code></td><td><span class="method">POST</span></td><td>Submit support tickets or complaints</td></tr>
        </table>

        <h2>3. Data Entities</h2>
        
        <h3>Meal Entity (Short Version)</h3>
        <pre>{
  "id": "string",
  "name": "string",
  "nameBn": "string",
  "image": "url_string",
  "price": number,
  "currency": "string",
  "rating": number,
  "reviewCount": number,
  "isHomemade": boolean,
  "prepTime": {
    "min": number,
    "max": number,
    "formatted": "string"
  }
}</pre>

        <h3>Chef Entity</h3>
        <pre>{
  "id": "string",
  "name": "string",
  "avatar": "url_string",
  "rating": number,
  "totalOrders": number,
  "isVerified": boolean,
  "specialty": "string"
}</pre>

        <h2>4. Error Structure</h2>
        <pre>{
  "success": false,
  "error": {
    "code": "STRING_ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  }
}</pre>

      </body>
    </html>
  `);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Base URL: http://localhost:${PORT}/api/v1`);
});
