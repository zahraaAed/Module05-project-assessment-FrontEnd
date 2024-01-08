# Backend Assessment for E-commerce application

## Setting up the Backend

1. **Fork Repository**: Begin by forking the backend repository to your local machine.
2. **Create a New Branch**: Create a new branch with the name `firstname-lastname` to work on your project.
3. **Node.js Project**: Set up a new Node.js project for the backend.
4. **Install Dependencies**: Install the required dependencies.
5. **Create database**: Create a new database for the project using MongoDB Atlas.

## Instructions

Develop the backend for the E-commerce application to handle user registration, product manipulation

## Requirements

1. **User Registration**:

   - Create APIs for user registration and login.
   - Use bcrypt for password hashing.
   - Only registered users can place orders on products

2. **Product Data Model**:

   - Create a Product schema using Mongoose for storing product data.
   - The schema should include fields for image URLs, product title, and product description, and date added.
   - All fields should be required.
   - Set timestamps for the schema.

3. **Order Data Model**:

   - Create a Order schema using Mongoose for storing order data.
   - The schema should include fields for Product ID, product title, and product description, product quantity, price per unit and total price.
   - All fields should be required.
   - Each order should be linked to a userID

## Bonus

1. **Create dashboard**:

   - Create dashboard for store admin to create, update, and delete products.


## Submission

- After implementing the project, stage your changes, commit them, and push to your branch.
