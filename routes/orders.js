/**
 * Orders Routes
 * Handles order placement, history, and tracking
 */

const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');

// POST /api/v1/user/orders - Place new order (Checkout)
router.post('/', ordersController.createOrder);

// GET /api/v1/user/orders - Get order history
router.get('/', ordersController.getOrderHistory);

// GET /api/v1/user/orders/:id - Track specific order
router.get('/:id', ordersController.trackOrder);

module.exports = router;
