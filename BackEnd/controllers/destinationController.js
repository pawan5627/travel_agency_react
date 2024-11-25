// controllers/destinationController.js
const Destination = require('../models/Destination');

// Get all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching destinations', error: err });
  }
};

// Get a specific destination by name
exports.getDestinationByName = async (req, res) => {
  const { name } = req.params;
  try {
    const destination = await Destination.findOne({ name });
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json(destination);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching destination', error: err });
  }
};
