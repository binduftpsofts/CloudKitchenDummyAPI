/**
 * @file meal_search_api.js
 * @author Monjel Morshed Sabbir
 * @github @SabbirMMS @SabbirFTP
 * @created 2026-04-19
 * @updated 2026-04-19
 *
 * @description Mock API structure for meal search functionality
 * Endpoint: /api/v1/user/meals/search
 * Method: GET
 * Auth: Bearer Token Required
 *
 * Query Parameters:
 * - q: string (search query)
 * - category: string (all, veg, non-veg, spicy, etc.)
 * - diet: string (vegan, keto, halal, etc.)
 * - spiceLevel: string (mild, medium, hot, extra-spicy)
 * - sortBy: string (price-asc, price-desc, rating, delivery-time)
 * - maxPrice: number
 * - minRating: number
 * - maxDistance: number (in km)
 * - page: number
 * - limit: number
 */

const mealSearchApi = {
  endpoint: "/api/v1/user/meals/search",
  method: "GET",
  
  // Query parameters structure
  queryParams: {
    q: "string (search query)",
    category: "string (all, veg, non-veg, spicy, budget, fast-prep)",
    diet: "string (vegan, keto, halal, gluten-free, dairy-free)",
    spiceLevel: "string (mild, medium, hot, extra-spicy)",
    sortBy: "string (price-asc, price-desc, rating, delivery-time, distance)",
    maxPrice: "number (maximum price in BDT)",
    minRating: "number (minimum rating 0-5)",
    maxDistance: "number (maximum distance in km)",
    page: "number (pagination)",
    limit: "number (items per page, default 10)"
  },

  // Sample response structure
  response: {
    status: "success",
    code: 200,
    message: "Search results fetched successfully",
    data: {
      query: "string (search query used)",
      totalResults: "number",
      page: "number",
      limit: "number",
      hasMore: "boolean",
      meals: [
        {
          id: "string (UUID)",
          name: "string",
          nameBn: "string (Bengali name)",
          description: "string",
          image: "string (URL)",
          price: "number (BDT)",
          currency: "string (৳)",
          rating: "number (0.0 - 5.0)",
          reviewCount: "number",
          prepTime: {
            min: "number (minutes)",
            max: "number (minutes)"
          },
          isHomemade: "boolean",
          chef: {
            id: "string (UUID)",
            name: "string",
            avatar: "string (URL)",
            location: "string",
            distance: "number (km)"
          },
          category: "string",
          tags: ["string array"],
          dietaryInfo: {
            isVeg: "boolean",
            isVegan: "boolean",
            isHalal: "boolean",
            isKeto: "boolean",
            isGlutenFree: "boolean",
            spiceLevel: "string (mild, medium, hot, extra-spicy)"
          },
          distance: "number (km from user)",
          featured: "boolean"
        }
      ],
      filters: {
        appliedFilters: {
          category: "string",
          diet: "string",
          spiceLevel: "string",
          sortBy: "string"
        },
        availableFilters: {
          categories: ["string array"],
          diets: ["string array"],
          spiceLevels: ["string array"],
          sortOptions: ["string array"]
        }
      }
    }
  },

  // Sample search results
  sampleResults: {
    beefBhuna: {
      id: "meal-001",
      name: "Beef Bhuna",
      nameBn: "গরুর মাংস ভুনা",
      description: "Slow-cooked tender beef with aromatic local spices and herbs",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
      price: 350,
      currency: "৳",
      rating: 4.8,
      reviewCount: 120,
      prepTime: { min: 30, max: 40 },
      isHomemade: true,
      chef: {
        id: "chef-002",
        name: "Chef Rahat",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        location: "Dhaka North",
        distance: 2.5
      },
      category: "non-veg",
      tags: ["spicy", "beef", "traditional"],
      dietaryInfo: {
        isVeg: false,
        isVegan: false,
        isHalal: true,
        isKeto: false,
        isGlutenFree: true,
        spiceLevel: "hot"
      },
      distance: 2.5,
      featured: false
    },

    veganBowl: {
      id: "meal-002",
      name: "Vegan Buddha Bowl",
      nameBn: "ভেগান বুদ্ধা বোল",
      description: "Fresh seasonal vegetables with quinoa and tahini dressing",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
      price: 220,
      currency: "৳",
      rating: 4.9,
      reviewCount: 85,
      prepTime: { min: 15, max: 20 },
      isHomemade: true,
      chef: {
        id: "chef-005",
        name: "Chef Nusrat",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
        location: "Gulshan",
        distance: 3.2
      },
      category: "veg",
      tags: ["vegan", "healthy", "bowl"],
      dietaryInfo: {
        isVeg: true,
        isVegan: true,
        isHalal: true,
        isKeto: false,
        isGlutenFree: true,
        spiceLevel: "mild"
      },
      distance: 3.2,
      featured: true
    },

    kacchiBiryani: {
      id: "meal-003",
      name: "Kacchi Biryani",
      nameBn: "কাচ্চি বিরিয়ানি",
      description: "Authentic Dhaka-style kacchi biryani with premium basmati rice",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=400&fit=crop",
      price: 450,
      currency: "৳",
      rating: 4.9,
      reviewCount: 245,
      prepTime: { min: 45, max: 60 },
      isHomemade: true,
      chef: {
        id: "chef-001",
        name: "Chef Farhana",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
        location: "Old Dhaka",
        distance: 5.1
      },
      category: "non-veg",
      tags: ["biryani", "special", "traditional"],
      dietaryInfo: {
        isVeg: false,
        isVegan: false,
        isHalal: true,
        isKeto: false,
        isGlutenFree: true,
        spiceLevel: "medium"
      },
      distance: 5.1,
      featured: true
    }
  },

  // Error responses
  errorResponses: {
    "400": {
      status: "error",
      code: 400,
      message: "Invalid search parameters"
    },
    "401": {
      status: "error",
      code: 401,
      message: "Unauthorized - Invalid or expired token"
    },
    "500": {
      status: "error",
      code: 500,
      message: "Internal server error"
    }
  }
};

module.exports = mealSearchApi;
