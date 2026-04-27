const authApi = require('./schema/auth_api');
const foodDetailsApi = require('./schema/food_details_api').foodDetailsApi || require('./schema/food_details_api').mockFoodDetails;
const homeApi = require('./schema/home_api').response;
const homepageData = require('./schema/homepage_data').homepageApiStructure?.sampleResponse;
const mealSearchApi = require('./schema/meal_search_api').sampleResults;
const mealsApi = require('./schema/meals_api').response;
const ordersApi = require('./schema/orders_api');
const profileApi = require('./schema/profile_api');

console.log("Auth (send-otp):", JSON.stringify(authApi.sendOtp?.response || {success: true, message: "OTP Sent"}));
console.log("Auth (verify-otp):", JSON.stringify(authApi.verifyOtp?.response || {success: true, token: "jwt_token"}));
console.log("Auth (resend-otp):", JSON.stringify(authApi.resendOtp?.response || {success: true, message: "OTP Resent"}));

console.log("User (homepage):", JSON.stringify(homepageData || {success: true, data: {}}));
console.log("User (home):", JSON.stringify(homeApi || {success: true, data: {}}));
console.log("User (profile GET):", JSON.stringify(profileApi.getProfile?.response || {success: true, data: {}}));
console.log("User (profile PUT):", JSON.stringify(profileApi.updateProfile?.response || {success: true, message: "Profile Updated"}));

console.log("Meals (search):", JSON.stringify(mealSearchApi || {success: true, data: []}));
console.log("Meals (list):", JSON.stringify(mealsApi || {success: true, data: []}));
console.log("Meals (details):", JSON.stringify(foodDetailsApi?.response || {success: true, data: {}}));

console.log("Orders (post):", JSON.stringify(ordersApi.createOrder?.response || {success: true, data: {}}));
console.log("Orders (history):", JSON.stringify(ordersApi.getOrderHistory?.response || {success: true, data: []}));
console.log("Orders (track):", JSON.stringify(ordersApi.trackOrder?.response || {success: true, data: {}}));
