// Since we're using in-memory storage for simplicity, we'll define our products array here
// In a real application, you would use a database like MongoDB with mongoose
let products = [
  {
    id: '1',
    name: 'Sample Product',
    price: 99.99,
    description: 'This is a sample product',
    stock: 100,
    category: 'Electronics',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Helper function to generate a unique ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Get all products
exports.getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
};

// Get a single product by ID
exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
};

// Create a new product
exports.createProduct = (req, res) => {
  const { name, price, description, stock, category } = req.body;

  // Basic validation
  if (!name || !price) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name and price'
    });
  }

  const newProduct = {
    id: generateId(),
    name,
    price: parseFloat(price),
    description: description || '',
    stock: stock ? parseInt(stock) : 0,
    category: category || 'Uncategorized',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    data: newProduct
  });
};

// Update a product
exports.updateProduct = (req, res) => {
  let product = products.find(p => p.id === req.params.id);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }

  const { name, price, description, stock, category } = req.body;
  
  // Update fields if provided
  product.name = name || product.name;
  product.price = price !== undefined ? parseFloat(price) : product.price;
  product.description = description !== undefined ? description : product.description;
  product.stock = stock !== undefined ? parseInt(stock) : product.stock;
  product.category = category || product.category;
  product.updatedAt = new Date();

  // Update the product in the array
  products = products.map(p => p.id === req.params.id ? product : p);

  res.status(200).json({
    success: true,
    data: product
  });
};

// Delete a product
exports.deleteProduct = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }

  // Filter out the product to delete
  products = products.filter(p => p.id !== req.params.id);

  res.status(200).json({
    success: true,
    data: {},
    message: 'Product deleted successfully'
  });
};