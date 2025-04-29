const mongoose = require('mongoose');

// Define the schema for our Product model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: [0, 'Stock cannot be negative']
  },
  category: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save middleware to update the updatedAt field
productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create the model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;