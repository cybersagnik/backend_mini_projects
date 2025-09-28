#🛒 Mini E-Commerce API
 A simple yet secure E-Commerce Backend API built with Node.js, Express, MongoDB, and JWT authentication.
 This project is designed for learning, and as a foundation.

##  Features
- Authentication & Security

- JWT-based user login/registration

- Password hashing with bcrypt

- Products Management

- Add, list, and manage products

- Stock management on orders

- Orders System

- Create orders with multiple products

- Auto total calculation with 5% platform fee

## Clean Architecture

- Modular routes, models, and middleware

-Easy to extend

## Tech Stack

- #### Backend:Node.js, Express.js

- #### Database:MongoDB (Atlas) with Mongoose ODM

- #### Auth: JWT + bcrypt

- #### Dev Tools: Nodemon, Postman for testing

## Getting Started
1. Clone Repository
   `git clone https://github.com/your-username/mini-ecommerce-api.git
cd mini-ecommerce-api`

3. Install Dependencies
`npm install`

4. Setup Environment Variables

5. Run Server
`npm run dev   # development mode with nodemon
npm start     # production mode`

``Server runs on:
http://localhost:5000``

## API Endpoints
- Auth Routes
  ``POST /api/auth/register → Register new user
  POST /api/auth/login → Login & get JWT``

- Product Routes
  ``POST /api/products (Auth required) → Create product
  GET /api/products → List all products``

- Order Routes
  ``POST /api/orders (Auth required) → Create order``

## Example API Flow

- Register user → /api/auth/register

- Login → copy JWT token

- Create product → use JWT in Authorization header

- Place order with product ID`

## Demo with Postman

https://github.com/user-attachments/assets/d0f237ee-5973-40f0-bb5d-0795d3ee4dab


## Strengths

- Follows clean MVC-style architecture (easy to scale).

- Implements JWT auth + bcrypt security.

- Uses MongoDB Atlas cloud DB.

- API-first design → can connect to web or mobile apps.

## Future Add-ons

- Role-based access (Admin vs User)

- Swagger/OpenAPI documentation (/api/docs)

- Payment Gateway Integration (Stripe / Razorpay test mode)

- Email notifications on order

- Caching with Redis
🐳 Docker support for deployment

🌍 Deploy API to Render / Railway / Vercel with MongoDB Atlas
