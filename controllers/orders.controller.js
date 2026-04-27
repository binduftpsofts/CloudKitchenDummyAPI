/**
 * Orders Controller
 * Handles order-related operations
 */

const mockData = require('../data/mockData');
const { sendSuccess, sendError, sendValidationError } = require('../utils/response.util');

/**
 * Place a new order (Checkout)
 * POST /api/v1/user/orders
 */
const createOrder = (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    // Validation
    if (!items || items.length === 0) {
      return sendValidationError(res, { items: 'At least one item is required' });
    }

    // Mock order response
    sendSuccess(
      res,
      mockData.ordersApi.placeOrder.response.data,
      mockData.ordersApi.placeOrder.response.message,
      200
    );
  } catch (error) {
    sendError(res, 'Failed to place order', 500, error);
  }
};

/**
 * Get order history
 * GET /api/v1/user/orders
 */
const getOrderHistory = (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    sendSuccess(
      res,
      mockData.ordersApi.getOrderHistory.response.data,
      'Order history retrieved successfully',
      200
    );
  } catch (error) {
    sendError(res, 'Failed to fetch order history', 500, error);
  }
};

/**
 * Track a specific order
 * GET /api/v1/user/orders/:id
 */
const trackOrder = (req, res) => {
  try {
    const { id } = req.params;

    // Return mock tracking response
    sendSuccess(res, mockData.ordersApi.trackOrder.response.data, 'Order tracking data retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to track order', 500, error);
  }
};

module.exports = {
  createOrder,
  getOrderHistory,
  trackOrder,
};
