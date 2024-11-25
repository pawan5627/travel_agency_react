const express = require('express');
const router = express.Router();

const { 
    newOrder, 
  getSingleOrder, 
  myOrders, 
  allOrders, 
  mylatestOrders, 
  updateOrder, 
  deleteOrder 
} = require('../controllers/orderController');

const { verifyToken, authorizeRoles } = require('../Middleware/authMiddleware');

// Route to place a new order
router.post('/newOrder', verifyToken, newOrder);

// Route to get the latest order for the logged-in user
router.get('/myorder', verifyToken, mylatestOrders);

// Route to get all orders for the logged-in user
router.get('/myorders', verifyToken, myOrders);

// Route to get a specific order by ID
router.get('/order/:id', verifyToken, getSingleOrder);

// Admin routes

// Route to get all orders (for admins)
router.get('/admin/allorders', verifyToken, authorizeRoles('admin'), allOrders);

// Route to update order status (for admins)
router.put('/admin/order/:id', verifyToken, authorizeRoles('admin'), updateOrder);

// Route to delete an order (for admins)
router.delete('/admin/order/:id', verifyToken, authorizeRoles('admin'), deleteOrder);

module.exports = router;
