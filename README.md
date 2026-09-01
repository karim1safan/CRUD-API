# Node.js API Tutorial

A simple REST API built with Express and MongoDB using Mongoose. The project exposes CRUD endpoints for products.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- nodemon

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create an `.env` file with your MongoDB connection string:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

The server runs on `http://localhost:3000`.

## Product Model

Each product has the following fields:

```json
{
  "title": "Sample Product",
  "quantity": 10,
  "inStock": true,
  "price": 99.99,
  "image": "https://example.com/image.png"
}
```

Field details:

- `title` - string, required
- `quantity` - number, required, default `0`
- `inStock` - boolean, required, default `false`
- `price` - number, required, default `0`
- `image` - string, optional, default empty string

## Base Route

All product endpoints are prefixed with:

```text
/api/products
```

## Endpoints

### Create a product

- Method: `POST`
- Path: `/api/products`

Request body:

```json
{
  "title": "Keyboard",
  "quantity": 5,
  "inStock": true,
  "price": 49.99,
  "image": "https://example.com/keyboard.png"
}
```

Success response:

```json
{
  "message": "Product has been added successfully!",
  "product": {
    "_id": "...",
    "title": "Keyboard",
    "quantity": 5,
    "inStock": true,
    "price": 49.99,
    "image": "https://example.com/keyboard.png",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### Get all products

- Method: `GET`
- Path: `/api/products`

Success response:

```json
{
  "products": []
}
```

### Get a product by id

- Method: `GET`
- Path: `/api/products/:id`

Success response:

```json
{
  "product": {
    "_id": "...",
    "title": "Keyboard",
    "quantity": 5,
    "inStock": true,
    "price": 49.99,
    "image": "https://example.com/keyboard.png",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

If the product does not exist:

```json
{
  "status": "Error",
  "message": "Product not found with that ID"
}
```

### Update a product

- Method: `PUT`
- Path: `/api/products/:id`

Request body can include any product fields:

```json
{
  "price": 59.99,
  "inStock": false
}
```

Success response:

```json
{
  "message": "Product Updated Successfully",
  "product": {
    "_id": "...",
    "title": "Keyboard",
    "quantity": 5,
    "inStock": false,
    "price": 59.99,
    "image": "https://example.com/keyboard.png",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

If the product does not exist:

```json
{
  "status": "Error",
  "message": "Product not found with that ID"
}
```

### Delete a product

- Method: `DELETE`
- Path: `/api/products/:id`

Success response:

```json
{
  "message": "Product Deleted Successfully",
  "product": {
    "_id": "...",
    "title": "Keyboard",
    "quantity": 5,
    "inStock": true,
    "price": 49.99,
    "image": "https://example.com/keyboard.png",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

If the product does not exist:

```json
{
  "status": "Error",
  "message": "Product not found with that ID"
}
```

## Notes

- Make sure MongoDB is running and the connection string in `.env` is correct.
- The API expects JSON request bodies, so send `Content-Type: application/json`.
