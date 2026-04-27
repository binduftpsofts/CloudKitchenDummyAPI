/**
 * Chef Routes
 */

const express = require('express');
const router = express.Router();
const chefController = require('../controllers/chef.controller');

// 1. Chef — Orders
router.get('/orders', chefController.getOrders);
router.patch('/orders/:orderId/accept', chefController.acceptOrder);
router.patch('/orders/:orderId/cancel', chefController.cancelOrder);
router.patch('/orders/:orderId/status', chefController.updateOrderStatus);
router.patch('/orders/:orderId/delay', chefController.delayOrder);
router.post('/orders/:orderId/verify-handover', chefController.verifyHandover);

// 2. Chef — Wallet
router.get('/wallet', chefController.getWallet);
router.get('/wallet/transactions', chefController.getTransactions);
router.post('/wallet/withdraw', chefController.withdraw);

// 3. Chef — Recipes
router.get('/recipes', chefController.getRecipes);
router.post('/recipes', chefController.addRecipe);
router.put('/recipes/:recipeId', chefController.updateRecipe);
router.delete('/recipes/:recipeId', chefController.deleteRecipe);

// 4. Chef — Reviews
router.get('/reviews', chefController.getReviews);
router.post('/reviews/:reviewId/reply', chefController.replyToReview);
router.get('/reviews/unrated-riders', chefController.getUnratedRiders);
router.post('/reviews/rate-rider', chefController.rateRider);

// 5. Chef — Live Stream
router.post('/livestream/start', chefController.startStream);
router.post('/livestream/stop', chefController.stopStream);
router.patch('/livestream/step', chefController.updateStreamStep);
router.get('/livestream/status', chefController.getStreamStatus);

// 6. Chef — Profile
router.get('/profile', chefController.getProfile);
router.patch('/profile', chefController.updateProfile);
router.post('/profile/avatar', chefController.updateAvatar);

module.exports = router;
