// models/User.js
const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const User = mongoose.model('User', userSchema);

module.exports = User;

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
        maxlength: 11,
        trim: true
    },
    deliveryaddress: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ["superadmin", "admin", "user", "customer"]
    },
    avatar: {
        public_id: {
            type: String,
            //required: true
        },
        url: {
            type: String,
            //required: true
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
}, { timestamps: true })

userSchema.virtual("password")
    .set(function (password) {
        this._password = password
        this.salt = uuidv1()
        this.encrypted_password = this.securePassword(password)
    })
    .get(function () {
        return this._password
    })

userSchema.methods = {
    authenticate: function (plainpassword) {
        return this.securePassword(plainpassword) === this.encrypted_password
    },

    securePassword: function (plainpassword) {
        if (!plainpassword) return "";

        try {
            return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
        }
        catch {
            return ""
        }
    }
}

module.exports = mongoose.model("User", userSchema)



