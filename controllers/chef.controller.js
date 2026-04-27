/**
 * Chef Controller
 * Mock endpoints for Chef API
 */

// --- 1. Chef Orders ---
exports.getOrders = (req, res) => {
  res.json({
    success: true,
    orders: [
      {
        id: "4021",
        status: "preparing",
        remainingMinutes: 8,
        placedTime: "2026-04-27T09:00:00Z",
        customerName: "Sabbir Ahmed",
        orderValue: 850.0,
        preferences: ["Less Oil"],
        riderStatus: "Searching for rider...",
        items: [
          { name: "Kacchi Biryani (Full)", quantity: 1, dietaryTags: ["Best Seller"] },
          { name: "Borhani", quantity: 2, dietaryTags: [] }
        ],
        riderName: null, riderVehicle: null, riderPhoto: null, riderDistance: null,
        riderEta: null, riderPlateNumber: null, riderLat: null, riderLng: null,
        handoverOtp: null, estimatedDeliveryTime: null, actualDeliveryTime: null
      }
    ]
  });
};

exports.acceptOrder = (req, res) => {
  res.json({ success: true, orderId: req.params.orderId, newStatus: "incoming" });
};

exports.cancelOrder = (req, res) => {
  res.json({ success: true, orderId: req.params.orderId, newStatus: "cancelled" });
};

exports.updateOrderStatus = (req, res) => {
  res.json({ success: true, orderId: req.params.orderId, previousStatus: "preparing", newStatus: "ready" });
};

exports.delayOrder = (req, res) => {
  const additional = req.body.additionalMinutes || 5;
  res.json({ success: true, orderId: req.params.orderId, newRemainingMinutes: 8 + additional });
};

exports.verifyHandover = (req, res) => {
  if (req.body.otp === req.params.orderId) {
    res.json({ success: true, orderId: req.params.orderId, newStatus: "onTheWay" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

// --- 2. Chef Wallet ---
exports.getWallet = (req, res) => {
  res.json({
    success: true,
    availableBalance: 45200.0,
    pendingBalance: 12500.0,
    currency: "BDT",
    todayEarnings: 620.0,
    todayOrderCount: 2,
    weeklyGrowthPercent: 15.4,
    weeklySparkline: [320, 450, 280, 780, 620, 850, 1250]
  });
};

exports.getTransactions = (req, res) => {
  const filter = req.query.filter || 'week';
  res.json({
    success: true,
    filter: filter,
    totalEarnings: 2900.0,
    orderCount: 5,
    avgOrderValue: 580.0,
    transactions: [
      {
        id: "TXN-001", orderId: "4019", date: "2026-04-27T07:00:00Z", amount: 450.0,
        type: "processing", description: "Order Sale", customerName: "Ashikur Rahman", orderItems: ["Protein Platter x1"]
      },
      {
        id: "TXN-003", orderId: null, date: "2026-04-26T09:00:00Z", amount: 5000.0,
        type: "debit", description: "Withdrawal to bKash", customerName: null, orderItems: null
      }
    ]
  });
};

exports.withdraw = (req, res) => {
  const amount = req.body.amount || 0;
  if (amount < 500) {
    return res.status(400).json({ success: false, message: "Insufficient balance or amount below minimum (500 BDT)" });
  }
  res.json({
    success: true, transactionId: "TXN-W" + Date.now(), amount: amount, method: req.body.method,
    newAvailableBalance: 45200.0 - amount, status: "processing"
  });
};

// --- 3. Chef Recipes ---
exports.getRecipes = (req, res) => {
  res.json({
    success: true,
    recipes: [
      {
        id: "r1", name: "Kacchi Biryani (Full)", description: "Authentic mutton kacchi biryani cooked with aromatic basmati rice.",
        price: 450.0, imageUrl: "https://images.unsplash.com/...", category: "Main Course",
        preparationTime: 45, dietaryTags: ["Best Seller", "Meat"], status: "approved", createdAt: "2026-04-17T00:00:00Z"
      }
    ]
  });
};

exports.addRecipe = (req, res) => {
  res.status(201).json({
    success: true,
    recipe: {
      id: "r8", ...req.body, status: "pending", createdAt: new Date().toISOString()
    }
  });
};

exports.updateRecipe = (req, res) => {
  res.json({ success: true, recipe: { id: req.params.recipeId, ...req.body, status: "approved", createdAt: "2026-04-17T00:00:00Z" } });
};

exports.deleteRecipe = (req, res) => {
  res.json({ success: true, message: "Recipe deleted successfully" });
};

// --- 4. Chef Reviews ---
exports.getReviews = (req, res) => {
  res.json({
    success: true,
    averageRating: 4.5,
    reviews: [{
      id: "REV-001", targetId: "REC-1", targetName: "Spicy Fish Curry", customerName: "Ashikur Rahman",
      rating: 5.0, comment: "Absolutely delicious!", date: "2026-04-26T09:00:00Z", type: "customerToChef",
      chefReply: null, replyDate: null
    }]
  });
};

exports.replyToReview = (req, res) => {
  res.json({ success: true, reviewId: req.params.reviewId, reply: req.body.reply, replyDate: new Date().toISOString() });
};

exports.getUnratedRiders = (req, res) => {
  res.json({
    success: true,
    unratedOrders: [{
      orderId: "4025", customerName: "Anika Tabassum", riderName: "Kamal Hossain", deliveredAt: "2026-04-27T08:00:00Z",
      items: [{ name: "Spicy Fish Curry", quantity: 1, dietaryTags: [] }]
    }]
  });
};

exports.rateRider = (req, res) => {
  res.status(201).json({ success: true, reviewId: "REV-R-" + req.body.orderId, message: "Rider rated successfully" });
};

// --- 5. Chef Live Stream ---
exports.startStream = (req, res) => {
  res.json({
    success: true, streamId: "stream-abc123", orderId: req.body.orderId, startTime: new Date().toISOString(),
    viewerCount: 1, currentStep: "Preparing Ingredients",
    cookingSteps: ["Preparing Ingredients", "Heating Oil & Spices", "Marinating Meat", "Adding Rice & Saffron", "Layering & Dum Cooking", "Final Garnishing"]
  });
};

exports.stopStream = (req, res) => {
  res.json({ success: true, message: "Stream ended" });
};

exports.updateStreamStep = (req, res) => {
  res.json({ success: true, currentStep: req.body.step });
};

exports.getStreamStatus = (req, res) => {
  res.json({
    success: true, isStreaming: true, orderId: "4021", viewerCount: 12,
    startTime: "2026-04-27T09:00:00Z", currentStep: "Marinating Meat"
  });
};

// --- 6. Chef Profile ---
exports.getProfile = (req, res) => {
  res.json({
    success: true,
    profile: { id: "chef-001", name: "Chef Farhana", email: "farhana.khan@homechef.com", phone: "01712345678", profileImageUrl: "https://images.unsplash.com/..." }
  });
};

exports.updateProfile = (req, res) => {
  res.json({
    success: true,
    profile: { id: "chef-001", name: req.body.name || "Chef Farhana Khan", email: req.body.email || "farhana.new@homechef.com", phone: "01712345678", profileImageUrl: "https://images.unsplash.com/..." }
  });
};

exports.updateAvatar = (req, res) => {
  res.json({ success: true, profileImageUrl: "https://cdn.homechefcloud.com/avatars/chef-001.jpg" });
};
