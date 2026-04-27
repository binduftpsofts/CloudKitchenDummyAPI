/**
 * User Routes
 * Includes meals, profiles, and user-related endpoints
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET /api/v1/user/homepage - Dashboard Data (Detailed)
router.get('/homepage', userController.getHomepage);

// GET /api/v1/user/home - Initial Dashboard Data
router.get('/home', userController.getHome);

// GET /api/v1/user/meals/search - Search meals
router.get('/meals/search', userController.searchMeals);

// GET /api/v1/user/meals - List all meals
router.get('/meals', userController.getAllMeals);

// GET /api/v1/user/meals/:id - Get single meal by ID
router.get('/meals/:id', userController.getMealById);

// GET /api/v1/user/profile - Get user profile
router.get('/profile', userController.getProfile);

// PUT /api/v1/user/profile - Update user profile
router.put('/profile', userController.updateProfile);

module.exports = router;
