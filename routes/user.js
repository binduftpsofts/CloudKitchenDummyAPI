const express = require('express');
const router = express.Router();
const mockData = require('../data/mockData');

// GET /api/v1/user/homepage (Dashboard Data - Detailed)
router.get('/homepage', (req, res) => {
  res.status(200).json(mockData.homepageData);
});

// GET /api/v1/user/home (Initial Dashboard Data - Alternative)
router.get('/home', (req, res) => {
  res.status(200).json(mockData.homeApi);
});

// GET /api/v1/user/meals/search
router.get('/meals/search', (req, res) => {
  // Use query parameters if needed: req.query
  res.status(200).json(mockData.mealSearchApi);
});

// GET /api/v1/user/meals
router.get('/meals', (req, res) => {
  res.status(200).json(mockData.mealsApi);
});

// GET /api/v1/user/meals/:id
router.get('/meals/:id', (req, res) => {
  const { id } = req.params;
  
  // Try to find the exact meal in our mock array
  const meal = mockData.mockMeals.find(m => m.id === id);
  
  if (meal) {
    // Wrap in standard response structure
    res.status(200).json({
      success: true,
      data: meal
    });
  } else {
    // If not found, just return the first mock food details to simulate success for any ID
    res.status(200).json(mockData.foodDetailsResponse.response);
  }
});

// GET /api/v1/user/profile
router.get('/profile', (req, res) => {
  res.status(200).json(mockData.profileApi.getProfile.response);
});

// PUT /api/v1/user/profile
router.put('/profile', (req, res) => {
  res.status(200).json(mockData.profileApi.updateProfile.response);
});

// GET /api/v1/user/wallet
router.get('/wallet', (req, res) => {
  res.status(200).json(mockData.profileApi.getWallet.response);
});

// POST /api/v1/user/complaints
const supportApi = require('../../support_api');
router.post('/complaints', (req, res) => {
  res.status(200).json(supportApi.response);
});

module.exports = router;
