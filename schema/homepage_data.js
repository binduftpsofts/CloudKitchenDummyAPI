/**
 * @file homepage_data.js
 * @author Monjel Morshed Sabbir
 * @github @SabbirMMS @SabbirFTP
 * @created 2026-04-19
 * @updated 2026-04-19
 *
 * @description API structure for User HomePage data and Authentication
 * This file defines the expected API response structure for the backend team.
 * Base URL: /api/v1/user/homepage
 * Method: GET
 * Auth: Bearer Token Required
 *
 * ============================================================
 * SAMPLE CREDENTIALS FOR TESTING (Mock API)
 * ============================================================
 * 
 * User Account:
 *   Phone: +8801712345678
 *   OTP: 123456
 *   Role: user
 *   Redirect: /user/home (HomeScreen)
 * 
 * Chef Account:
 *   Phone: +8801912345678
 *   OTP: 123456
 *   Role: chef
 *   Redirect: /chef/home (ChefHomeScreen - shows toast for now)
 * 
 * ============================================================
 */

const homepageApiStructure = {
  _comment: "API Response Structure for User HomePage",
  endpoint: "/api/v1/user/homepage",
  method: "GET",
  authentication: "Bearer Token",
  
  response: {
    status: "success",
    code: 200,
    message: "Homepage data fetched successfully",
    data: {
      user: {
        id: "string (UUID)",
        name: "string",
        avatar: "string (URL)",
        location: "string"
      },
      
      categories: [
        {
          id: "string (UUID)",
          name: "string (e.g., 'All', 'Veg', 'Non-Veg')",
          slug: "string (e.g., 'all', 'veg', 'non-veg')",
          isActive: "boolean",
          icon: "string (optional material icon name)"
        }
      ],
      
      featured: {
        id: "string (UUID)",
        type: "string (e.g., 'chef', 'dish')",
        title: "string",
        titleBn: "string (Bengali title)",
        subtitle: "string",
        image: "string (URL)",
        chef: {
          id: "string (UUID)",
          name: "string",
          location: "string"
        },
        badge: {
          text: "string (e.g., 'Featured Chef')",
          color: "string (hex color)"
        }
      },
      
      dishes: [
        {
          id: "string (UUID)",
          name: "string",
          nameBn: "string (Bengali name)",
          description: "string",
          image: "string (URL)",
          price: "number (in BDT)",
          currency: "string (e.g., '৳')",
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
            avatar: "string (URL)"
          },
          tags: ["string array"],
          dietaryInfo: {
            isVeg: "boolean",
            isSpicy: "boolean"
          }
        }
      ],
      
      pagination: {
        currentPage: "number",
        totalPages: "number",
        totalItems: "number",
        itemsPerPage: "number",
        hasNextPage: "boolean",
        hasPrevPage: "boolean"
      }
    }
  },

  sampleResponse: {
    status: "success",
    code: 200,
    message: "Homepage data fetched successfully",
    data: {
      user: {
        id: "usr-001",
        name: "John Doe",
        avatar: "https://example.com/avatars/user1.jpg",
        location: "Dhaka North"
      },
      categories: [
        { id: "cat-001", name: "All", slug: "all", isActive: true },
        { id: "cat-002", name: "Veg", slug: "veg", isActive: false },
        { id: "cat-003", name: "Non-Veg", slug: "non-veg", isActive: false },
        { id: "cat-004", name: "Spicy", slug: "spicy", isActive: false },
        { id: "cat-005", name: "Budget", slug: "budget", isActive: false },
        { id: "cat-006", name: "Fast Prep", slug: "fast-prep", isActive: false }
      ],
      featured: {
        id: "dish-001",
        type: "dish",
        title: "Authentic Kachchi Biryani",
        titleBn: "কাচ্চি বিরিয়ানি",
        subtitle: "By Chef Farhana • Dhaka North",
        image: "https://example.com/dishes/kachchi-biryani.jpg",
        chef: {
          id: "chef-001",
          name: "Chef Farhana",
          location: "Dhaka North"
        },
        badge: {
          text: "Featured Chef",
          color: "#9af7af"
        }
      },
      dishes: [
        {
          id: "dish-002",
          name: "Beef Bhuna",
          nameBn: "গরুর মাংস ভুনা",
          description: "Slow-cooked tender beef with local spices",
          image: "https://example.com/dishes/beef-bhuna.jpg",
          price: 350,
          currency: "৳",
          rating: 4.8,
          reviewCount: 120,
          prepTime: { min: 30, max: 40 },
          isHomemade: true,
          chef: {
            id: "chef-002",
            name: "Chef Rahat",
            avatar: "https://example.com/avatars/chef-rahat.jpg"
          },
          tags: ["spicy", "non-veg"],
          dietaryInfo: { isVeg: false, isSpicy: true }
        },
        {
          id: "dish-003",
          name: "Shobji Bhetki",
          nameBn: "সবজি ভেটকি",
          description: "Lightly sautéed seasonal vegetables with local fish",
          image: "https://example.com/dishes/shobji-bhetki.jpg",
          price: 180,
          currency: "৳",
          rating: 4.9,
          reviewCount: 85,
          prepTime: { min: 20, max: 25 },
          isHomemade: true,
          chef: {
            id: "chef-003",
            name: "Chef Salma",
            avatar: "https://example.com/avatars/chef-salma.jpg"
          },
          tags: ["veg", "healthy"],
          dietaryInfo: { isVeg: true, isSpicy: false }
        }
      ],
      pagination: {
        currentPage: 1,
        totalPages: 5,
        totalItems: 48,
        itemsPerPage: 10,
        hasNextPage: true,
        hasPrevPage: false
      }
    }
  },

  errorResponses: {
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

// ============================================================
// MOCK CREDENTIALS FOR DEVELOPMENT
// ============================================================
const mockCredentials = {
  user: {
    phone: "+8801712345678",
    otp: "123456",
    role: "user",
    token: "mock_user_token_12345",
    user: {
      id: "usr-001",
      name: "Rahim Ahmed",
      avatar: "https://example.com/avatars/rahim.jpg",
      location: "Dhaka North"
    }
  },
  chef: {
    phone: "+8801912345678",
    otp: "654321",
    role: "chef",
    token: "mock_chef_token_67890",
    user: {
      id: "chef-001",
      name: "Chef Fatima",
      avatar: "https://example.com/avatars/fatima.jpg",
      location: "Dhaka South",
      chefInfo: {
        id: "chef-001",
        rating: 4.8,
        totalOrders: 234,
        specialties: ["Biryani", "Kacchi", "Traditional"]
      }
    }
  }
};

module.exports = {
  homepageApiStructure,
  mockCredentials
};
