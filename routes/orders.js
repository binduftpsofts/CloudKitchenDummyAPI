const express = require('express');
const router = express.Router();
const mockData = require('../data/mockData');

// POST /api/v1/user/orders (Checkout)
router.post('/', (req, res) => {
  res.status(200).json(mockData.ordersApi.placeOrder.response);
});

// GET /api/v1/user/orders (Order History)
router.get('/', (req, res) => {
  res.status(200).json(mockData.ordersApi.getOrderHistory.response);
});

// GET /api/v1/user/orders/:id (Track Order)
router.get('/:id', (req, res) => {
  res.status(200).json(mockData.ordersApi.trackOrder.response);
});

module.exports = router;
