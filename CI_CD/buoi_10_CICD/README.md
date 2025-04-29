# Product Service API

A simple Express.js service for managing product information with full CRUD operations.

## Features

- Product management (name, price, description, stock, category)
- RESTful API endpoints for CRUD operations
- CI/CD pipeline with GitHub Actions
- Testing with Jest and Supertest

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /products | Get all products |
| GET    | /products/:id | Get a single product by ID |
| POST   | /products | Create a new product |
| PUT    | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/product-service.git
   cd product-service
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file based on the `.env.example` (already done in this project)

4. Start the server
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## Running Tests

```bash
npm test
```

## CI/CD Pipeline

This project includes a GitHub Actions workflow that:
1. Builds and tests the application on multiple Node.js versions
2. Deploys the application when changes are pushed to the main branch

## Project Structure

```
├── controllers/        # Request handlers
│   └── productController.js
├── models/             # Data models
│   └── productModel.js
├── routes/             # API routes
│   └── productRoutes.js
├── tests/              # Tests
│   └── product.test.js
├── .env                # Environment variables
├── .github/workflows/  # GitHub Actions workflows
│   └── ci-cd.yml
├── server.js           # Application entry point
└── package.json        # Project dependencies and scripts
```

## License

This project is licensed under the ISC License.