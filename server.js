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

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Base URL: http://localhost:${PORT}/api/v1`);
});
