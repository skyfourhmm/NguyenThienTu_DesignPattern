const request = require('supertest');
const app = require('../server');

describe('Product API', () => {
  // Test GET all products
  describe('GET /products', () => {
    it('should return all products', async () => {
      const res = await request(app).get('/products');
      
      expect(res.statusCode).toEqual(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  // Test GET a single product
  describe('GET /products/:id', () => {
    it('should return a product if valid ID is provided', async () => {
      // Since we have a sample product with ID '1'
      const res = await request(app).get('/products/1');
      
      expect(res.statusCode).toEqual(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('name');
      expect(res.body.data).toHaveProperty('price');
    });

    it('should return 404 if invalid ID is provided', async () => {
      const res = await request(app).get('/products/invalid-id');
      
      expect(res.statusCode).toEqual(404);
      expect(res.body.success).toBe(false);
    });
  });

  // Test POST a new product
  describe('POST /products', () => {
    it('should create a new product', async () => {
      const newProduct = {
        name: 'Test Product',
        price: 59.99,
        description: 'This is a test product',
        stock: 50,
        category: 'Test'
      };
      
      const res = await request(app)
        .post('/products')
        .send(newProduct);
      
      expect(res.statusCode).toEqual(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('id');
      expect(res.body.data.name).toBe(newProduct.name);
      expect(res.body.data.price).toBe(newProduct.price);
    });

    it('should return 400 if name is missing', async () => {
      const incompleteProduct = {
        price: 59.99
      };
      
      const res = await request(app)
        .post('/products')
        .send(incompleteProduct);
      
      expect(res.statusCode).toEqual(400);
      expect(res.body.success).toBe(false);
    });
  });

  // Additional tests for PUT and DELETE can be added here
});