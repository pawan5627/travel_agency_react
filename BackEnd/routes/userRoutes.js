// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the routes and connect them to the controller functions
router.post('/users',function(req, res){
    userController.Create
  });
router.get('/users', function(req, res){
    userController.getUser
  });
router.get('/users/:id',function(req, res){
    userController.getUserById
  });

module.exports = router;
