const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: ["superadmin", "admin", "user", "customer"],
    },
    description: {
        type: String,
        default: "",
    }
}, { timestamps: true });

module.exports = mongoose.model("Role", roleSchema);
