const mongoose = require("mongoose");
const crypto = require("crypto");
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
        unique: true
    },
    phonenumber: {
        type: String,
        //required: true,
        maxlength: 15,
        trim: true
    },
    deliveryaddress: {
        type: String,
        required: function () {
            return this.role === 'customer'; // Only customers need delivery address
        },
    },
    role: {
        type: String,
        default: "user", // Default role
        enum: ["superadmin", "admin", "user", "customer"] // Roles: superadmin, admin, user (general role), customer
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
    salt: String,
    // Customer-specific fields
    bookingHistory: [{
        dealId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Deal"
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
userSchema.virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv1();
        this.encrypted_password = this.securePassword(password);
    })
    .get(function () {
        return this._password;
    });

// Methods for encryption, authentication, etc.
userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encrypted_password;
    },

    securePassword: function (plainpassword) {
        if (!plainpassword) return "";

        try {
            return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex");
        }
        catch {
            return "";
        }
    }
};

// Create and export User model
const User = mongoose.model("User", userSchema);
module.exports = User;
