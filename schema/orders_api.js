/**
 * @file orders_api.js
 * @description API for orders, checkout and tracking
 */

const ordersApi = {
  // 1. Checkout (Place Order)
  placeOrder: {
    endpoint: "/api/v1/user/orders",
    method: "POST",
    requestBody: {
      items: [
        { mealId: "meal_001", quantity: 2 },
        { mealId: "meal_005", quantity: 1 }
      ],
      deliveryAddressId: "addr_123",
      paymentMethod: "cash_on_delivery", // or 'wallet', 'online'
      note: "Extra spicy please"
    },
    response: {
      success: true,
      data: {
        orderId: "ORD-987654321",
        status: "placed",
        totalAmount: 1250,
        currency: "৳",
        orderTime: "2026-04-23T12:00:00Z"
      }
    }
  },

  // 2. Order History
  getOrderHistory: {
    endpoint: "/api/v1/user/orders",
    method: "GET",
    response: {
      success: true,
      data: [
        {
          id: "ORD-987654321",
          status: "delivered",
          totalAmount: 450,
          items: 1,
          date: "2026-04-20"
        }
      ]
    }
  },

  // 3. Order Tracking (Detail)
  trackOrder: {
    endpoint: "/api/v1/user/orders/:id",
    method: "GET",
    response: {
      success: true,
      data: {
        id: "ORD-987654321",
        status: "preparing", // placed -> preparing -> on_the_way -> delivered
        statusUpdates: [
          { status: "placed", time: "12:00 PM" },
          { status: "preparing", time: "12:15 PM" }
        ],
        chef: {
          name: "Anika",
          phone: "+8801XXXXXXXXX"
        },
        deliveryMan: {
          name: "Rahim",
          phone: "+8801XXXXXXXXX"
        },
        items: [
          { name: "Shorshe Beef", quantity: 1, price: 450 }
        ],
        total: 450
      }
    }
  }
};

module.exports = ordersApi;
