/**
 * @file chefs_api.js
 * @description API for the User Chefs/Kitchen module
 */

const chefsApi = {
    // GET /api/v1/user/chefs
    endpoint: "/api/v1/user/chefs",
    method: "GET",

    response: {
        success: true,
        data: {
            chefs: [
                {
                    chefId: "CHEF-001",
                    id: "CHEF-001",
                    name: "Chef Anika Rahman",
                    avatar: "https://example.com/avatars/chef1.jpg",
                    specialty: "Traditional Bengali Cuisine",
                    bio: "Passionate about authentic Bengali flavors with 10+ years of experience",
                    rating: 4.8,
                    totalOrders: 520,
                    totalMeals: 25,
                    isVerified: true,
                    experience: "10+ years",
                    cuisines: ["Bengali", "Indian", "Mughlai"],
                    isOnline: true,
                    location: "Dhanmondi, Dhaka"
                },
                {
                    chefId: "CHEF-002",
                    id: "CHEF-002",
                    name: "Chef Mahmud Hassan",
                    avatar: "https://example.com/avatars/chef2.jpg",
                    specialty: "North Indian & Mughlai",
                    bio: "Master of aromatic biryanis and rich curries",
                    rating: 4.6,
                    totalOrders: 380,
                    totalMeals: 18,
                    isVerified: true,
                    experience: "8 years",
                    cuisines: ["Mughlai", "North Indian", "Pakistani"],
                    isOnline: true,
                    location: "Gulshan, Dhaka"
                },
                {
                    chefId: "CHEF-003",
                    id: "CHEF-003",
                    name: "Chef Fatima Khan",
                    avatar: "https://example.com/avatars/chef3.jpg",
                    specialty: "Healthy & Organic Meals",
                    bio: "Creating nutritious meals without compromising on taste",
                    rating: 4.9,
                    totalOrders: 650,
                    totalMeals: 32,
                    isVerified: true,
                    experience: "12 years",
                    cuisines: ["Healthy", "Organic", "Continental"],
                    isOnline: false,
                    location: "Banani, Dhaka"
                },
                {
                    chefId: "CHEF-004",
                    id: "CHEF-004",
                    name: "Chef Rahim Uddin",
                    avatar: "https://example.com/avatars/chef4.jpg",
                    specialty: "Street Food Special",
                    bio: "Bringing the best of Dhaka street food to your doorstep",
                    rating: 4.5,
                    totalOrders: 290,
                    totalMeals: 15,
                    isVerified: false,
                    experience: "6 years",
                    cuisines: ["Street Food", "Snacks", "Bengali"],
                    isOnline: true,
                    location: "Mirpur, Dhaka"
                },
                {
                    chefId: "CHEF-005",
                    id: "CHEF-005",
                    name: "Chef Nasreen Akter",
                    avatar: "https://example.com/avatars/chef5.jpg",
                    specialty: "Seafood Expert",
                    bio: "Fresh seafood cooked to perfection with traditional recipes",
                    rating: 4.7,
                    totalOrders: 440,
                    totalMeals: 22,
                    isVerified: true,
                    experience: "9 years",
                    cuisines: ["Seafood", "Bengali", "Thai"],
                    isOnline: true,
                    location: "Uttara, Dhaka"
                },
                {
                    chefId: "CHEF-006",
                    id: "CHEF-006",
                    name: "Chef Karim Ahmed",
                    avatar: "https://example.com/avatars/chef6.jpg",
                    specialty: "Desserts & Sweets",
                    bio: "Sweet creations that melt in your mouth",
                    rating: 4.8,
                    totalOrders: 510,
                    totalMeals: 28,
                    isVerified: true,
                    experience: "11 years",
                    cuisines: ["Desserts", "Bengali Sweets", "Bakery"],
                    isOnline: false,
                    location: "Mohammadpur, Dhaka"
                }
            ]
        }
    }
};

// GET /api/v1/user/chefs/:id - Single Chef Details
const chefDetailsApi = {
    endpoint: "/api/v1/user/chefs/:id",
    method: "GET",

    response: {
        success: true,
        data: {
            chef: {
                chefId: "CHEF-001",
                id: "CHEF-001",
                name: "Chef Anika Rahman",
                avatar: "https://example.com/avatars/chef1.jpg",
                specialty: "Traditional Bengali Cuisine",
                bio: "Passionate about authentic Bengali flavors with 10+ years of experience",
                rating: 4.8,
                totalOrders: 520,
                totalMeals: 25,
                isVerified: true,
                experience: "10+ years",
                cuisines: ["Bengali", "Indian", "Mughlai"],
                isOnline: true,
                location: "Dhanmondi, Dhaka",
                // Additional details for chef profile
                joinedDate: "2021-03-15",
                responseTime: "15-20 mins",
                deliveryRadius: "5 km",
                activeMeals: [
                    {
                        id: "meal-001",
                        name: "Kachchi Biryani",
                        price: 450,
                        rating: 4.9,
                        image: "https://example.com/meals/biryani.jpg"
                    }
                ]
            }
        }
    }
};

module.exports = { chefsApi, chefDetailsApi };
