# HomeChef Cloud API Documentation (User & Auth Modules)

This document outlines the required API structures for the Backend team to implement. All endpoints follow the Version 1 (`/api/v1`) pattern.

## Base URL
`https://api.homechef.cloud/api/v1`

---

## 1. Authentication Module

| Endpoint | Method | Description |
| :--- | :---: | :--- |
| `/auth/send-otp` | POST | Request OTP for phone login |
| `/auth/verify-otp` | POST | Verify OTP and return session token |
| `/auth/resend-otp` | POST | Resend OTP if not received |

---

## 2. User Module

| Endpoint | Method | Description |
| :--- | :---: | :--- |
| `/user/home` | GET | Initial dashboard data (Categories, Featured, Initial Meals) |
| `/user/meals` | GET | List of all meals with filtering/search/pagination |
| `/user/meals/:id` | GET | Detailed information for a specific meal |
| `/user/chefs` | GET | List of all available chefs with their profiles |
| `/user/chefs/:id` | GET | Public profile of a chef including their active meals |
| `/user/profile` | GET | Current logged-in user profile details |
| `/user/profile` | PUT | Update user profile information |
| `/user/orders` | GET | History of user orers |
| `/user/orders` | POST | Place a new order (Checkout) |
| `/user/orders/:id` | GET | Real-time tracking and status for an order |
| `/user/wallet` | GET | User balance and transaction history |
| `/user/complaints` | POST | Submit support tickets or complaints |

---

## 3. Data Entities

### Meal Entity (Short Version)
Used in lists, search results, and "Similar Items".
```json
{
  "id": "string",
  "name": "string",
  "nameBn": "string",
  "image": "url_string",
  "price": number,
  "currency": "string",
  "rating": number,
  "reviewCount": number,
  "isHomemade": boolean,
  "prepTime": {
    "min": number,
    "max": number,
    "formatted": "string"
  }
}
```

### Chef Entity
```json
{
  "chefId": "string",
  "id": "string",
  "name": "string",
  "avatar": "url_string",
  "specialty": "string",
  "bio": "string",
  "rating": number,
  "totalOrders": number,
  "totalMeals": number,
  "isVerified": boolean,
  "experience": "string",
  "cuisines": ["string"],
  "isOnline": boolean,
  "location": "string",
  "joinedDate": "YYYY-MM-DD",
  "responseTime": "string",
  "deliveryRadius": "string",
  "activeMeals": [
    {
      "id": "string",
      "name": "string",
      "price": number,
      "rating": number,
      "image": "url_string"
    }
  ]
}
```

---

## 4. Error Structure
All APIs should return a consistent error format for non-200 responses.
```json
{
  "success": false,
  "error": {
    "code": "STRING_ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  }
}
```
