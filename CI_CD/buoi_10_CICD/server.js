const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Product Service API is running!');
});

// Connect to MongoDB (if enabled)
// Uncomment this if you want to connect to MongoDB
/*
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/product-service')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
*/

// Only start the server if this file is run directly (not when imported in tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export for testing