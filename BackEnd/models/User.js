const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const { v1: uuidv1 } = require('uuid');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
        index: true
    },
    phonenumber: {
        type: String,
        //required: true,
        maxlength: 15,
        trim: true,
        match: [/^\d{10,15}$/, "Please provide a valid phone number."]
    },
    deliveryaddress: {
        type: String,
        required: function () {
            return this.role === 'customer'; // Only customers need delivery address
        },
        default: ''
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    default: 'user' // Roles: superadmin, admin, user (general role), customer
    },

    avatar: {
        public_id: {
            type: String,
            // required: true
        },
        url: {
            type: String,
            // required: true
        }
    },
    account_status: {
        type: String,
        default: "active",
        enum: ["active", "inactive"]
    },
    encrypted_password: {
        type: String,
        required: true
    },
    // Customer-specific fields
    bookingHistory: [{
        dealId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Deal",
            index: true
        },
        bookingDate: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ["booked", "completed", "cancelled"],
            default: "booked"
        }
    }],
    // Admin-specific fields
    permissions: {
        canCreateDeals: {
            type: Boolean,
            default: false
        },
        canManageUsers: {
            type: Boolean,
            default: false
        },
        canManageDestinations: {
            type: Boolean,
            default: false
        }
    }
}, { timestamps: true });

// Virtual for password
userSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.encrypted_password = bcrypt.hashSync(this.password, 10);
    }
    next();
});

userSchema.methods.authenticate = function(plainpassword) {
    return bcrypt.compareSync(plainpassword, this.encrypted_password);
};
// Methods for encryption, authentication, etc.
userSchema.methods = {
    authenticate: function (plainpassword) {
        return bcrypt.compareSync(plainpassword, this.encrypted_password);
    },

    securePassword: function (plainpassword) {
        if (!plainpassword) return "";

        try {
            const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainpassword, salt);
        }
        catch (error) {
            console.error("Error hashing password: ", error);
            return "";
        }
    }
};

// Create and export User model
module.exports = mongoose.model("User", userSchema);

