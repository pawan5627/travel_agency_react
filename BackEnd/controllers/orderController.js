const Order = require('../models/Order');
const Destination = require('../models/Destination');
const catchAsyncErrors = require('../Middleware/catchAsyncErrors');

// Place a new order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        orderItems,
        deliverycharges,
        totalPrice,
        paymentmethod,
        deliveryaddress,
        additionalInstructions,
        customer_id
    } = req.body;

    // Create new order
    const order = await Order.create({
        orderItems,
        deliverycharges,
        totalPrice,
        paymentmethod,
        deliveryaddress,
        additionalInstructions,
        orderDate: Date.now(),
        customer_id
    });
    await order.populate('customer_id');
    if (!orderItems || !totalPrice || !paymentmethod || !deliveryaddress || !customer_id) {
        return res.status(400).json({
            success: false,
            message: 'Missing required fields'
        });
    }
    res.status(200).json({
        success: true,
        order
    });
});

// Get a specific order by ID
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('orderItems.destination');

    if (!order) {
        return res.status(404).json({
            success: false,
            message: 'Order not found'
        });
    }

    res.status(200).json({
        success: true,
        order
    });
});

// Get logged in user's orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ customer_id: req.user._id })
        .sort({ 'orderDate': -1 })
        .populate('orderItems.destination');

    res.status(200).json({
        success: true,
        count: orders.length,
        orders
    });
});

// Get the latest order of the logged-in user
exports.mylatestOrders = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findOne({ customer_id: req.user._id })
        .sort({ 'orderDate': -1 })
        .limit(1)
        .populate('orderItems.destination');

    res.status(200).json({
        success: true,
        order
    });
});

// Get all orders for admins
exports.allOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find()
        .sort({ 'orderStatus': -1, 'orderDate': -1 })
        .populate('orderItems.destination');

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        count: orders.length,
        totalAmount,
        orders
    });
});

// Update order status for admins
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: 'Order not found'
        });
    }

    if (req.body.orderStatus != null) {
        if (order.orderStatus === 'Completed') {
            return res.status(400).json({
                message: 'This order has already been completed'
            });
        }

        order.orderStatus = req.body.orderStatus;
        
        // If the order is marked as 'Completed', set the delivery date
        if (req.body.orderStatus === "Completed") {
            order.deliveredAt = Date.now();
        }
    }

    await order.save();

    res.status(200).json({
        success: true,
        order
    });
});

// Delete an order for admins
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return res.status(404).json({
            success: false,
            message: 'Order not found'
        });
    }

    await order.remove();

    res.status(200).json({
        success: true,
        message: 'Order deleted successfully'
    });
});


