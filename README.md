# HomeChef API Mock Server

A mock REST API server for the HomeChef application built with Express.js and ready for Vercel deployment.

## Features

- 🚀 Express.js server with CORS support
- 📦 Mock API endpoints for authentication, user management, and orders
- 🔄 Structured mock data with realistic responses
- 📝 Comprehensive API documentation at `/api/v1`
- ✅ Vercel deployment ready

## Project Structure

```
server/
├── routes/              # API route handlers
│   ├── auth.js         # Authentication endpoints
│   ├── user.js         # User and meal endpoints
│   └── orders.js       # Order management endpoints
├── schema/             # Mock data schemas
│   ├── auth_api.js
│   ├── food_details_api.js
│   ├── homepage_data.js
│   ├── home_api.js
│   ├── meal_search_api.js
│   ├── meals_api.js
│   ├── orders_api.js
│   └── profile_api.js
├── data/               # Mock data aggregation
│   └── mockData.js
├── server.js           # Main Express app
├── package.json
├── vercel.json         # Vercel configuration
├── .env.example        # Environment variables template
└── .gitignore
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from template:
```bash
cp .env.example .env
```

## Local Development

Start the development server with hot reload:
```bash
npm run dev
```

Or run without nodemon:
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Documentation

Access the API documentation at:
- Root: `http://localhost:5000/`
- API Docs: `http://localhost:5000/api/v1`

Deployed to vercel
- Root: `https://cloud-kitchen-dummy-api.vercel.app`
- API Docs: `https://cloud-kitchen-dummy-api.vercel.app/api/v1`


### Available Endpoints

#### Authentication (`/api/v1/auth`)
- `POST /send-otp` - Request OTP for phone login
- `POST /verify-otp` - Verify OTP and return token
- `POST /resend-otp` - Resend OTP if not received

#### User (`/api/v1/user`)
- `GET /home` - Get dashboard data
- `GET /homepage` - Get homepage data
- `GET /meals` - List all meals
- `GET /meals/:id` - Get meal details
- `GET /meals/search` - Search meals
- `GET /profile` - Get user profile
- `GET /chefs` - List all available chefs
- `GET /chefs/:id` - Get chef details

#### Orders (`/api/v1/user/orders`)
- `POST /` - Place new order
- `GET /` - Get order history
- `GET /:id` - Track specific order

## Vercel Deployment

### Prerequisites
- Vercel account (https://vercel.com)
- Vercel CLI installed: `npm i -g vercel`

### Deployment Steps

1. **Using Vercel CLI:**
```bash
vercel
```
Follow the prompts to connect your repository and deploy.

2. **Using Git Integration (Recommended):**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Vercel at https://vercel.com/new
   - Select this project and Vercel will auto-deploy on git push

3. **Environment Variables:**
   - Set `PORT=3000` in Vercel environment settings (optional, defaults to 3000)

### Vercel Configuration

The `vercel.json` file is already configured with:
- Node.js runtime (`@vercel/node`)
- Proper routing for all Express endpoints
- Environment variable setup

## Environment Variables

Create a `.env` file based on `.env.example`:

```
PORT=5000
NODE_ENV=development
```

For Vercel, set these in the project settings on vercel.com.

## Available Scripts

```bash
npm start      # Run the server
npm run dev    # Run with nodemon for development
npm run build  # Build command (placeholder)
npm test       # Run tests
```

## Technologies Used

- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Node.js** - JavaScript runtime

## License

ISC

## Support

For issues or questions, please create an issue in the repository.
