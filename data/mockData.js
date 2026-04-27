// Consolidated Mock Data for HomeChef API

const foodDetails = require('../../food_details_api').mockFoodDetails || {};
const foodDetailsResponse = require('../../food_details_api').foodDetailsApi || {};
const homepageData = require('../../homepage_data').homepageApiStructure?.sampleResponse || {};
const mealSearchApi = require('../../meal_search_api').sampleResults || {};
const mealsApi = require('../../meals_api').response || {};
const homeApi = require('../../home_api').response || {};
const ordersApi = require('../../orders_api') || {};
const profileApi = require('../../profile_api') || {};

// Mock Data Objects directly from the files to ensure we have them
const mockMeals = [
  {
    id: "meal_001",
    name: "Shorshe Beef Bhuna",
    nameBn: "সরষে বিফ ভুনা",
    description: "Traditional slow-cooked beef with authentic home-ground spices.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    price: 450,
    currency: "৳",
    category: "non-veg",
    prepTime: { value: 45, unit: "mins", formatted: "45 mins" },
    calories: 420,
    serves: "1-2 People",
    spiceLevel: "hot",
    rating: 4.9,
    reviewCount: 127,
    badges: ["Highly Rated", "Best Seller"],
    ingredients: ["Beef", "Onion", "Garlic", "Ginger", "Mustard Oil", "Special Spice Mix", "Green Chili", "Tomato"],
    isAvailable: true,
    isHomemade: true,
    chef: {
        id: "chef-002",
        name: "Chef Rahat",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop",
        location: "Dhaka North",
        distance: 2.5
    }
  },
  {
    id: "meal_002",
    name: "Chicken Biryani",
    nameBn: "চিকেন বিরিয়ানি",
    description: "Aromatic basmati rice layered with tender chicken.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    price: 380,
    currency: "৳",
    category: "non-veg",
    prepTime: { value: 60, unit: "mins", formatted: "60 mins" },
    calories: 550,
    serves: "1-2 People",
    spiceLevel: "medium",
    rating: 4.8,
    reviewCount: 203,
    badges: ["Popular", "Fast Delivery"],
    ingredients: ["Basmati Rice", "Chicken", "Saffron", "Onion", "Yogurt", "Biryani Masala", "Ghee", "Mint"],
    isAvailable: true,
    isHomemade: true,
    chef: {
        id: "chef-001",
        name: "Chef Farhana",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop",
        location: "Old Dhaka",
        distance: 5.1
    }
  },
  {
    id: "meal_003",
    name: "Paneer Butter Masala",
    nameBn: "পনির বাটার মাসালা",
    description: "Soft cottage cheese cubes in rich, creamy tomato-based gravy.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800",
    price: 320,
    currency: "৳",
    category: "veg",
    prepTime: { value: 35, unit: "mins", formatted: "35 mins" },
    calories: 380,
    serves: "1-2 People",
    spiceLevel: "mild",
    rating: 4.7,
    reviewCount: 95,
    badges: ["Vegetarian", "Quick Prep"],
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Onion", "Cashew", "Garam Masala", "Kasuri Methi"],
    isAvailable: true,
    isHomemade: true,
    chef: {
        id: "chef-005",
        name: "Chef Nusrat",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
        location: "Gulshan",
        distance: 3.2
    }
  }
];

const mockOrders = [
  {
    id: "ORD-987654321",
    status: "delivered",
    totalAmount: 450,
    items: 1,
    date: "2026-04-20"
  }
];

module.exports = {
  foodDetails,
  foodDetailsResponse,
  homepageData,
  mealSearchApi,
  mealsApi,
  homeApi,
  ordersApi,
  profileApi,
  mockMeals,
  mockOrders
};
