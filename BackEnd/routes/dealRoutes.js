// routes/dealRoutes.js
const express = require('express');
const router = express.Router();
const dealController = require('../controllers/dealController');
const {verifyToken, authorizeRoles} = require('../Middleware/authMiddleware'); // Authentication middleware

// Create a new deal (authorizeRoles("admin") only)
router.post('/', verifyToken, authorizeRoles("admin"), dealController.createDeal);

// Get all deals
router.get('/', dealController.getAllDeals);

// Get a single deal by ID
router.get('/:id', dealController.getDealById);

// Update a deal by ID (authorizeRoles("admin") only)
router.put('/:id', verifyToken, authorizeRoles("admin"), dealController.updateDeal);

// Delete a deal by ID (authorizeRoles("admin") only)
router.delete('/:id', verifyToken, authorizeRoles("admin"), dealController.deleteDeal);

module.exports = router;
