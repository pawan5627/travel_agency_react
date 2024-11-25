// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize dotenv for environment variables
dotenv.config();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the Travel Agency backend!');
});

// Import routes for users, deals, destinations
const userRoutes = require('./routes/userRoutes');
const dealRoutes = require('./routes/dealRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const orderRoutes = require('./routes/orderRoutes');
const roleRoutes = require('./routes/roleRoutes');

// Import authentication middleware
const { verifyToken, authorizeRoles } = require('./Middleware/authMiddleware');

// Register routes
app.use('/api/users', userRoutes); // User routes
app.use('/api/deals', verifyToken, authorizeRoles("admin"), dealRoutes); // Deals routes (Protected: Only authorizeRoles("admin") can create, update, delete)
app.use('/api/destinations', verifyToken, destinationRoutes); // Destination routes (Protected if needed, depending on requirements)
app.use('/api/order', orderRoutes);
app.use('/api/role',verifyToken, roleRoutes); // Destination routes (Protected if needed, depending on requirements)

// Define the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
