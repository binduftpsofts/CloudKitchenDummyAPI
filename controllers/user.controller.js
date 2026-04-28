/**
 * User Controller
 * Handles user-related operations (meals, profile, etc.)
 */

const mockData = require('../data/mockData');
const { chefsApi, chefDetailsApi } = require('../chefs_api');
const { sendSuccess, sendError } = require('../utils/response.util');

/**
 * Get homepage data
 * GET /api/v1/user/homepage
 */
const getHomepage = (req, res) => {
  try {
    sendSuccess(res, mockData.homepageData, 'Homepage data retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to fetch homepage data', 500, error);
  }
};

/**
 * Get home/dashboard data
 * GET /api/v1/user/home
 */
const getHome = (req, res) => {
  try {
    sendSuccess(res, mockData.homeApi, 'Home data retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to fetch home data', 500, error);
  }
};

/**
 * Search meals
 * GET /api/v1/user/meals/search
 */
const searchMeals = (req, res) => {
  try {
    const { query } = req.query;
    sendSuccess(res, mockData.mealSearchApi, 'Meals searched successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to search meals', 500, error);
  }
};

/**
 * Get all meals
 * GET /api/v1/user/meals
 */
const getAllMeals = (req, res) => {
  try {
    sendSuccess(res, mockData.mealsApi, 'Meals retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to fetch meals', 500, error);
  }
};

/**
 * Get single meal by ID
 * GET /api/v1/user/meals/:id
 */
const getMealById = (req, res) => {
  try {
    const { id } = req.params;

    // Try to find the exact meal in our mock array
    const meal = mockData.mockMeals.find((m) => m.id === id);

    if (meal) {
      return sendSuccess(res, meal, 'Meal retrieved successfully', 200);
    }

    // If not found, return mock food details
    sendSuccess(res, mockData.foodDetailsResponse.response.data, 'Meal retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to fetch meal details', 500, error);
  }
};

/**
 * Get user profile
 * GET /api/v1/user/profile
 */
const getProfile = (req, res) => {
  try {
    sendSuccess(res, mockData.profileApi.getProfile.response.data, 'Profile retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to fetch profile', 500, error);
  }
};

/**
 * Update user profile
 * PUT /api/v1/user/profile
 */
const updateProfile = (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Mock update response
    sendSuccess(
      res,
      {
        id: 'user_001',
        name: name || 'John Doe',
        email: email || 'john@example.com',
        phone: phone || '+88XXXXXXXXXX',
        message: 'Profile updated successfully',
      },
      'Profile updated successfully',
      200
    );
  } catch (error) {
    sendError(res, 'Failed to update profile', 500, error);
  }
};

/**
 * Get all chefs
 * GET /api/v1/user/chefs
 */
const getChefs = (req, res) => {
  try {
    sendSuccess(res, chefsApi.response.data, 'Chefs retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to fetch chefs', 500, error);
  }
};

/**
 * Get single chef by ID
 * GET /api/v1/user/chefs/:id
 */
const getChefById = (req, res) => {
  try {
    const { id } = req.params;
    
    // In a real app, we would search for the chef by id. 
    // Here we just return the mock detail, but we can customize the ID in the response if needed.
    const responseData = JSON.parse(JSON.stringify(chefDetailsApi.response.data));
    responseData.chef.id = id;
    responseData.chef.chefId = id;
    
    sendSuccess(res, responseData, 'Chef details retrieved successfully', 200);
  } catch (error) {
    sendError(res, 'Failed to fetch chef details', 500, error);
  }
};

module.exports = {
  getHomepage,
  getHome,
  searchMeals,
  getAllMeals,
  getMealById,
  getProfile,
  updateProfile,
  getChefs,
  getChefById,
};
