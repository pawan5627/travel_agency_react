const Role = require("../models/Role");

// Create a new role
exports.createRole = async (req, res) => {
    try {
        res.cookie("token", token, {
            httpOnly: true,   // To prevent access via JS
            secure: process.env.NODE_ENV === 'production',  // If using HTTPS
            expires: new Date(Date.now() + 3600000), // Set expiry (optional)
          });
          
        const { name, description } = req.body;
        const newRole = new Role({ name, description });
        await newRole.save();
        return res.status(201).json({ success: true, role: newRole });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get all roles
exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        return res.status(200).json({ success: true, roles });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Get role by ID
exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.id);
        if (!role) {
            return res.status(404).json({ success: false, message: "Role not found" });
        }
        return res.status(200).json({ success: true, role });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update role
exports.updateRole = async (req, res) => {
    try {
        const { name, description } = req.body;
        const role = await Role.findByIdAndUpdate(req.params.id, { name, description }, { new: true });
        if (!role) {
            return res.status(404).json({ success: false, message: "Role not found" });
        }
        return res.status(200).json({ success: true, role });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete role
exports.deleteRole = async (req, res) => {
    try {
        const role = await Role.findByIdAndDelete(req.params.id);
        if (!role) {
            return res.status(404).json({ success: false, message: "Role not found" });
        }
        return res.status(200).json({ success: true, message: "Role deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};
