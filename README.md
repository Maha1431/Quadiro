# Quadiro

This project is a backend system for managing car records using Node.js, Express.js, and MongoDB. It includes admin and user functionalities, such as logging in, managing car records, and viewing cars.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## Setup

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quadiro-assignment.git
   cd quadiro-assignment

Install dependencies:


npm install
Create a .env file in the root directory and add the following:


PORT=3000
MONGODB_URI=your url
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy code
node src/index.js
You should see:


Server started on port 3000
MongoDB Connected...
API Documentation
Authentication
Register
URL: /api/auth/register
Method: POST
Headers: Content-Type: application/json
Body:
json

{
  "username": "admin",
  "password": "admin123",
  "isAdmin": true
}
Description: Registers a new user. Set isAdmin to true for admin and false for normal users.
Login
URL: /api/auth/login
Method: POST
Headers: Content-Type: application/json
Body:
json

{
  "username": "admin",
  "password": "admin123"
}
Description: Logs in a user and returns a JWT token.
Car Management
Create Car
URL: /api/cars
Method: POST
Headers:
Content-Type: application/json
x-auth-token: your_admin_token
Body:
json

{
  "carName": "Toyota Camry",
  "manufacturingYear": 2020,
  "price": 25000
}
Description: Creates a new car record. Admin only.
View Cars
URL: /api/cars
Method: GET
Headers:
x-auth-token: your_token
Description: Retrieves the list of all cars.
Update Car
URL: /api/cars/:id
Method: PUT
Headers:
Content-Type: application/json
x-auth-token: your_admin_token
Body:
json

{
  "carName": "Toyota Corolla",
  "manufacturingYear": 2021,
  "price": 20000
}
Description: Updates a car record by ID. Admin only.
Delete Car
URL: /api/cars/:id
Method: DELETE
Headers:
x-auth-token: your_admin_token
Description: Deletes a car record by ID. Admin only.
Basic Dashboard
Get Statistics
URL: /api/dashboard/stats
Method: GET
Headers:
x-auth-token: your_admin_token
Description: Retrieves basic statistics like the total number of cars.
Running the Application
Start the server:


node src/index.js
Use Postman or any other API client to interact with the API endpoints as described in the API documentation.
