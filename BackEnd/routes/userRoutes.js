// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { signup, signin, signout, getprofile, updateUser, getAllUsers, getUserDetails, updateProfile, updatePassword, deactivateUser, updateAnyUser, deactivateAnyUser, deleteYourAccount} = require("../controllers/userController")
const {verifyToken, authorizeRoles} = require("../Middleware/authMiddleware");
const {check} = require('express-validator')
const userController = require('../controllers/userController');

// Define the routes and connect them to the controller functions
router.post('/signup', [
     check("name", "Name should be atleast 3 characters").isLength({min: 3}),
     check("phonenumber", "Phone Number should be exactly 11 digits").isLength({min: 11, max:11}),
     check("email", "Email Address should be valid").isEmail(),
     check("password", "Password should be atleast 8 characters").isLength({min: 8}),
 ], signup)

//  Login Route for all users
router.post("/login", signin)

//superadmin routes
//  update any particular user
// router.put("/superadmin/user/:id", verifyToken, authorizeRoles("superadmin"), updateAnyUser)
// deactivate a user
// router.put("/superadmin/deactivate/user/:id", verifyToken, authorizeRoles("superadmin"), deactivateAnyUser)


// admin routes
//  update a particular user
router.put("/admin/user/:id", verifyToken, authorizeRoles("admin"), updateUser)
// deactivate a user
router.put("/admin/deactivate/user/:id", verifyToken, authorizeRoles("admin"), deactivateUser)
// view a particular user
router.get("/admin/user/:id", verifyToken, authorizeRoles("admin"), getUserDetails)
// get all user
router.get("/admin/allusers", verifyToken, authorizeRoles("admin"), getAllUsers)


// get currently logged in user profile
router.get('/profile', verifyToken, getprofile)

// update your profile
router.put('/profile/update', verifyToken, updateProfile)

// update your password
router.put('/profile/update/password', verifyToken, updatePassword)

// delete your user
router.put("/myaccount/delete", verifyToken, deleteYourAccount)

router.get('/logout', signout)

module.exports = router
