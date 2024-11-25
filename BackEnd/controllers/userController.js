const User = require("../models/User");
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary');
const generateToken = require('../utils/jwtToken');
const catchAsyncErrors = require('../Middleware/catchAsyncErrors');

// SignUp - Create new user
exports.signup = catchAsyncErrors(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, phonenumber, deliveryaddress, email, password, avatar } = req.body;

    if (avatar !== '') {
        const result = await cloudinary.v2.uploader.upload(avatar, {
            folder: 'avatars',
            width: 800,
            crop: "scale"
        });

        const user = new User({
            name,
            phonenumber,
            email,
            deliveryaddress,
            password,
            avatar: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });

        user.save((err, newUser) => {
            if (err) {
                return res.status(400).json({ error: "Error!" });
            }
            generateToken(newUser, 200, res);
        });

    } else {
        const user = new User({
            name,
            phonenumber,
            email,
            deliveryaddress,
            password
        });

        user.save((err, newUser) => {
            if (err) {
                return res.status(400).json({ error: "Error!" });
            }
            generateToken(newUser, 200, res);
        });
    }
});

// SignIn - User login
exports.signin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "Email Address not found" });
        }
        if (user.account_status === "inactive") {
            return res.status(400).json({ error: "This account has been deleted" });
        }

        if (!user.authenticate(password)) {
            return res.status(400).json({ error: "Email Address or Password is incorrect" });
        }

        generateToken(user, 200, res);
    });
};

// SignOut - User logout
exports.signout = (req, res) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    return res.json({ success: true, message: "User signed out successfully." });
};

// GetProfile - View user profile
exports.getprofile = catchAsyncErrors(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        const { _id, name, email, phonenumber, deliveryaddress, role, createdAt, avatar } = user;
        return res.status(200).json({
            message: "success",
            user: { _id, name, email, phonenumber, deliveryaddress, role, createdAt, avatar }
        });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
});

// UpdateProfile - Update user profile
exports.updateProfile = catchAsyncErrors(async (req, res) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        deliveryaddress: req.body.deliveryaddress
    };

    const user = await User.findById(req.user._id);

    if (req.body.avatar) {
        if (user.avatar.public_id) {
            await cloudinary.v2.uploader.destroy(user.avatar.public_id);
        }

        const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: 'avatars',
            width: 800,
            crop: "scale"
        });

        newUserData.avatar = {
            public_id: result.public_id,
            url: result.secure_url
        };
    }

    const updatedUser = await User.findByIdAndUpdate(req.user._id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    return res.status(200).json({ success: true, updatedUser });
});

// UpdatePassword - Change password
exports.updatePassword = catchAsyncErrors(async (req, res) => {
    const { oldPassword, password } = req.body;

    const user = await User.findById(req.user._id).select('+encrypted_password');
    if (!user.authenticate(oldPassword)) {
        return res.status(400).json({ error: 'Old password is incorrect' });
    }

    user.password = password;
    await user.save();

    generateToken(user, 200, res);
});

// DeleteAccount - Delete your account
exports.deleteYourAccount = catchAsyncErrors(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    await User.findByIdAndUpdate(req.user._id, { account_status: "inactive" }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({ success: true, message: "Account Deleted Successfully" });
});

// UpdateUser - Admin can update user profile
exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id, role: "user" },
        req.body,
        { new: true, runValidators: true, useFindAndModify: false }
    )
        .then(user => {
            if (!user) {
                return res.status(200).json({ message: "You cannot update an admin" });
            }
            return res.status(200).json({ success: true, user });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

// GetAllUsers - Admin can get all users
exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => res.status(200).json({ success: true, users }))
        .catch(err => res.status(500).json({ error: err.message }));
};

// GetUserDetails - Admin can get details of any user
exports.getUserDetails = (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.status(200).json({ success: true, user });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

// DeactivateUser - Admin can deactivate any user
exports.deactivateUser = catchAsyncErrors(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (user.role === "user") {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { account_status: "inactive" }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        return res.status(200).json({ success: true, user: updatedUser });
    } else {
        return res.status(200).json({ message: "You cannot deactivate an admin" });
    }
});
