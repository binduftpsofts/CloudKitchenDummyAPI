/**
 * @file meals_api.js
 * @description API for listing and searching meals
 */

const mealsApi = {
  // GET /api/v1/user/meals
  endpoint: "/api/v1/user/meals",
  method: "GET",
  
  queryParams: {
    search: "string (optional)",
    category: "string (slug, optional)",
    spiceLevel: "string (mild|medium|hot, optional)",
    minPrice: "number (optional)",
    maxPrice: "number (optional)",
    page: "number (default 1)",
    limit: "number (default 20)"
  },
  
  response: {
    success: true,
    data: {
      items: [
        {
          id: "meal_001",
          name: "Chicken Roast",
          image: "https://example.com/roast.jpg",
          price: 420,
          currency: "৳",
          rating: 4.7,
          reviewCount: 210,
          prepTime: "45 mins",
          chef: {
            id: "chef_004",
            name: "Chef Anika"
          }
        }
      ],
      pagination: {
        total: 156,
        page: 1,
        lastPage: 8
      }
    }
  }
};

module.exports = mealsApi;
