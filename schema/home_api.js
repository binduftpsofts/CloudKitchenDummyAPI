/**
 * @file home_api.js
 * @description API for the User home dashboard
 */

const homeApi = {
  // GET /api/v1/user/home
  endpoint: "/api/v1/user/home",
  method: "GET",
  
  response: {
    success: true,
    data: {
      // User Context
      user: {
        id: "usr-001",
        name: "John Doe",
        avatar: "https://example.com/avatars/user.jpg",
        location: "Dhaka North"
      },
      
      // Top Navigation Categories
      categories: [
        { id: "cat-001", name: "All", slug: "all" },
        { id: "cat-002", name: "Veg", slug: "veg" },
        { id: "cat-003", name: "Non-Veg", slug: "non-veg" },
        { id: "cat-004", name: "Spicy", slug: "spicy" }
      ],
      
      // Main Featured Hero Section
      featured: {
        id: "dish-001",
        type: "dish",
        title: "Authentic Kachchi Biryani",
        titleBn: "কাচ্চি বিরিয়ানি",
        subtitle: "By Chef Farhana",
        image: "https://example.com/featured.jpg",
        badge: {
          text: "Featured Chef",
          color: "#9af7af"
        }
      },
      
      // Dynamic Feed (Nearby/Popular/New)
      dishes: [
        {
          id: "dish-002",
          name: "Beef Bhuna",
          nameBn: "গরুর মাংস ভুনা",
          price: 350,
          currency: "৳",
          rating: 4.8,
          reviewCount: 120,
          image: "https://example.com/beef.jpg",
          prepTime: {
            min: 30,
            max: 40,
            formatted: "30-40 mins"
          },
          isHomemade: true,
          chef: {
            id: "chef-002",
            name: "Chef Rahat",
            avatar: "https://example.com/chef2.jpg"
          }
        },
        // ... more items
      ]
    }
  }
};

module.exports = homeApi;
