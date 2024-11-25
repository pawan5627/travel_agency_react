// routes/destinationRoutes.js
const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Get all destinations
router.get('/destinations', destinationController.getAllDestinations);

// Get a specific destination by name
router.get('/destinations/:name', destinationController.getDestinationByName);

module.exports = router;
