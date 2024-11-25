// models/Deal.js
const mongoose = require('mongoose');

const DealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter Deal name'],
    trim: true,
    unique: true,
    maxLength: [100, 'Deal name cannot exceed 100 characters'],
  },
  description: {
    type: String,
    // required: [true, 'Please enter product description'], // Optional based on requirements
  },
  category: {
    type: String,
    required: [true, 'Please select category for this Deal'],
    enum: {
      values: [
        'Special Deals',
        'Premium Deals',
        'Limited-Time Deals',
        'Holiday Season Deals',
      ],
      message: 'Please select correct category for Deal',
    },
  },
  price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  // Reference to multiple destinations
  destinations: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Destination',
    },
  ],
  image_url: {
    type: String,
    required: true
  },
  deal_status: {
    type: String,
    default: 'active',
    enum: ['active', 'inactive'],
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Deal', DealSchema);
