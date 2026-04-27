/**
 * @file food_details_api.js
 * @author Monjel Morshed Sabbir
 * @github @SabbirMMS @SabbirFTP
 * @created 2026-04-19
 * @updated 2026-04-19
 *
 * @description Mock API structure for food details endpoint
 * @note Provide this to backend team for API implementation
 */

const foodDetailsApi = {
  // GET /api/v1/user/meals/:id
  endpoint: "/api/v1/user/meals/:id",
  method: "GET",
  
  pathParams: {
    id: "string (meal ID)"
  },

  // Response Structure
  response: {
    success: true,
    data: {
      id: "meal_001",
      name: "Shorshe Beef Bhuna",
      nameBn: "সরষে বিফ ভুনা",
      description: "Traditional slow-cooked beef with authentic home-ground spices. This recipe has been passed down through three generations, featuring a rich, dark gravy achieved through hours of slow simmering with hand-pressed mustard oil.",
      descriptionBn: "ঐতিহ্যবাহী ধীরে রান্না করা গরুর মাংস আসল মসলা দিয়ে। এই রেসিপি তিন প্রজন্ম ধরে চলে আসছে।",
      image: "https://example.com/images/shorshe-beef.jpg",
      images: [
        "https://example.com/images/shorshe-beef-1.jpg",
        "https://example.com/images/shorshe-beef-2.jpg",
        "https://example.com/images/shorshe-beef-3.jpg"
      ],
      price: 450,
      currency: "৳",
      category: "non-veg",
      tags: ["spicy", "traditional", "beef", "mustard"],
      
      // Meta Information
      prepTime: {
        value: 45,
        unit: "mins",
        formatted: "45 mins"
      },
      calories: 420,
      serves: "1-2 People",
      spiceLevel: "hot",
      dietType: "halal",
      
      // Ratings & Reviews
      rating: 4.9,
      reviewCount: 127,
      badges: ["Highly Rated", "Best Seller"],
      
      // Ingredients
      ingredients: [
        "Beef",
        "Onion",
        "Garlic",
        "Ginger",
        "Mustard Oil",
        "Special Spice Mix",
        "Green Chili",
        "Tomato"
      ],
      
      // Chef Information (ONE chef per meal)
      chef: {
        chefId: "chef_001",
        name: "Anika Rahman",
        nameBn: "অনিকা রহমান",
        avatar: "https://example.com/chefs/anika.jpg",
        rating: 4.9,
        totalOrders: 120,
        totalMeals: 15,
        isVerified: true,
        specialty: "Traditional Bangladeshi Cuisine",
        experience: "8 years",
        bio: "Passionate home chef specializing in authentic traditional recipes passed down through generations. Every dish is prepared with love and the finest ingredients."
      },
      
      // More from this chef (cross-sell)
      moreFromChef: [
        {
          mealId: "meal_010",
          name: "Kacchi Biryani",
          nameBn: "কাচ্চি বিরিয়ানি",
          image: "https://example.com/meals/kacchi.jpg",
          price: 520,
          rating: 4.8,
          prepTime: "60 mins"
        },
        {
          mealId: "meal_011",
          name: "Beef Rezala",
          nameBn: "বিফ রেজালা",
          image: "https://example.com/meals/rezala.jpg",
          price: 480,
          rating: 4.7,
          prepTime: "50 mins"
        }
      ],
      
      // Similar items (recommendations)
      similarItems: [
        {
          mealId: "meal_020",
          name: "Mutton Bhuna",
          nameBn: "মাটন ভুনা",
          image: "https://example.com/meals/mutton.jpg",
          price: 550,
          rating: 4.8,
          prepTime: "55 mins",
          category: "non-veg"
        },
        {
          mealId: "meal_021",
          name: "Chicken Karahi",
          nameBn: "চিকেন কারাহি",
          image: "https://example.com/meals/karahi.jpg",
          price: 420,
          rating: 4.6,
          prepTime: "40 mins",
          category: "non-veg"
        }
      ],
      
      // Nutritional Info (optional)
      nutrition: {
        protein: "28g",
        carbs: "15g",
        fat: "22g",
        fiber: "3g"
      },
      
      // Allergens
      allergens: ["Mustard"],
      
      // Customization Options
      customization: {
        spiceLevels: [
          { level: "mild", label: "Mild", additionalPrice: 0 },
          { level: "medium", label: "Medium", additionalPrice: 0 },
          { level: "hot", label: "Hot (Default)", additionalPrice: 0 },
          { level: "extra-spicy", label: "Extra Spicy", additionalPrice: 0 }
        ],
        portionSizes: [
          { size: "regular", label: "Regular (1-2 people)", additionalPrice: 0 },
          { size: "large", label: "Large (3-4 people)", additionalPrice: 150 }
        ],
        addOns: [
          { id: "addon_rice", name: "Extra Rice", price: 50 },
          { id: "addon_salad", name: "Fresh Salad", price: 30 },
          { id: "addon_drink", name: "Soft Drink", price: 40 }
        ]
      },
      
      // Chef's Story (optional)
      chefsStory: "This traditional recipe comes from my grandmother's kitchen in Old Dhaka. The secret lies in the slow-cooking process and the quality of mustard oil we use. Every batch is prepared with love and care, just like mom used to make.",
      
      // Preparation Notes
      preparationNotes: "Slow-cooked for 3 hours with hand-ground spices. Prepared fresh after order.",
      
      // Is available for order
      isAvailable: true,
      isHomemade: true,
      featured: true
    }
  },

  // Error Response
  errorResponse: {
    success: false,
    error: {
      code: "MEAL_NOT_FOUND",
      message: "The requested meal could not be found",
      statusCode: 404
    }
  }
};

// Mock Data Examples
const mockFoodDetails = {
  meal_001: {
    id: "meal_001",
    name: "Shorshe Beef Bhuna",
    nameBn: "সরষে বিফ ভুনা",
    description: "Traditional slow-cooked beef with authentic home-ground spices. This recipe has been passed down through three generations, featuring a rich, dark gravy achieved through hours of slow simmering with hand-pressed mustard oil.",
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
    isHomemade: true
  },
  
  meal_002: {
    id: "meal_002",
    name: "Chicken Biryani",
    nameBn: "চিকেন বিরিয়ানি",
    description: "Aromatic basmati rice layered with tender chicken, infused with saffron and traditional biryani spices. Cooked in the authentic Hyderabadi style with slow dum cooking method.",
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
    isHomemade: true
  },
  
  meal_003: {
    id: "meal_003",
    name: "Paneer Butter Masala",
    nameBn: "পনির বাটার মাসালা",
    description: "Soft cottage cheese cubes in rich, creamy tomato-based gravy with butter and aromatic spices. A vegetarian delight that's perfect with naan or rice.",
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
    isHomemade: true
  }
};

// Export for documentation
console.log("Food Details API Structure:", foodDetailsApi);
console.log("Mock Data:", mockFoodDetails);

module.exports = { foodDetailsApi, mockFoodDetails };
