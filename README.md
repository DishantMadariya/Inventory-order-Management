# Product & Inventory Management

## Overview

This project is a Node.js application designed for managing products and orders. It uses MongoDB for data storage and follows the MVC (Model-View-Controller) architecture. The application includes features for user registration, login, product management, and order management.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Customization](#customization)
- [Error Handling](#error-handling)
- [License](#license)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt.js
- JSON Web Token (JWT)

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the root directory with the following variables:

   ```
   PORT=<your-port-number>
   JWT_SECRET=<your-jwt-secret>
   MONGODB_URI=<your-mongodb-uri>
   ```

4. **Start the server**:

   For development, you can use `nodemon` to automatically restart the server on changes:

   ```bash
   npm run dev
   ```

## Usage

This application allows you to perform the following actions:

- **User Registration**: Register a new user with a name, email, password, and role.
- **User Login**: Authenticate a user and receive a JWT for authorized actions.
- **Product Management**: Create, retrieve, update, and delete products.
- **Order Management**: Create and retrieve orders associated with a user.

## API Endpoints

### User Endpoints

- **Register a User**: `POST /api/users/register`
  - **Body**: `{ "name": "John Doe", "email": "john@example.com", "password": "securepassword", "role": "customer" }`
  
- **Login a User**: `POST /api/users/login`
  - **Body**: `{ "email": "john@example.com", "password": "securepassword" }`

### Product Endpoints

- **Create a Product**: `POST /api/products`
  - **Body**: `{ "name": "Product Name", "price": 10.99, "stock": 100 }`
  
- **Get Products**: `GET /api/products/:id?`
  - **Params**: `id` (optional) - if provided, retrieves a specific product; otherwise, retrieves all products.

- **Update a Product**: `PUT /api/products/:id`
  - **Body**: `{ "name": "Updated Product", "price": 12.99, "stock": 90 }`
  
- **Delete a Product**: `DELETE /api/products/:id`

### Order Endpoints

- **Create an Order**: `POST /api/orders`
  - **Body**: `{ "products": ["productId1", "productId2"] }`
  
- **Get Orders**: `GET /api/orders`

## Error Handling

The application includes error handling for various scenarios:

- **400 Bad Request**: For invalid input during product creation and order status updates.
- **401 Unauthorized**: For invalid credentials during user login.
- **404 Not Found**: For attempts to access non-existent products or orders.
- **500 Internal Server Error**: For unexpected server errors.
