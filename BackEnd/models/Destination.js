// models/Destination.js
const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter destination name'],
  },
  country: {
    type: String,
    required: [true, 'Please enter the country for the destination'],
  },
  days: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  itineraries: [
    {
      title: {
        type: String,
        required: true,
      },
      activities: {
        type: [String],
        required: true,
      },
      activitiesDuration: {
        type: [String],
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Destination', DestinationSchema);
