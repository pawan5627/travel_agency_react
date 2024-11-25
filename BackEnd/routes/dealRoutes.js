// routes/dealRoutes.js
const express = require('express');
const router = express.Router();
const dealController = require('../controllers/dealController');
const { protect, admin } = require('../middleware/authMiddleware'); // Authentication middleware

// Create a new deal (Admin only)
router.post('/', protect, admin, dealController.createDeal);

// Get all deals
router.get('/', dealController.getAllDeals);

// Get a single deal by ID
router.get('/:id', dealController.getDealById);

// Update a deal by ID (Admin only)
router.put('/:id', protect, admin, dealController.updateDeal);

// Delete a deal by ID (Admin only)
router.delete('/:id', protect, admin, dealController.deleteDeal);

module.exports = router;
