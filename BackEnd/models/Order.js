const mongoose = require('mongoose');

// Order schema for travel agency
const orderSchema = mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'  // Refers to the customer who made the order
    },
    deliveryaddress: {
        type: String,
        required: true,
    },
    additionalInstructions: {
        type: String,
        // Optional instructions for the travel order
    },
    orderItems: [
        {
            destination: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Destination'  // Refers to the destination being booked
            },
            startDate: {
                type: Date,
                required: true,
            },
            endDate: {
                type: Date,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,  // Number of people for the booking
                min: 1
            },
            price: {
                type: Number,
                required: true,  // Price per person or booking
            },
            itineraryDetails: [
                {
                    title: {
                        type: String,
                        required: true
                    },
                    activities: [
                        {
                            activity: {
                                type: String,
                                required: true
                            },
                            duration: {
                                type: String,
                                required: true
                            }
                        }
                    ]
                }
            ]
        }
    ],
    deliverycharges: {
        type: Number,
        required: true,
        default: 0.0  // Optional delivery charges, if applicable
    },
    totalPrice: {
        type: Number,
        required: true,  // Total price for the booking
        default: 0.0
    },
    paymentmethod: {
        type: String,
        required: true,  // Payment method (e.g., Credit Card, PayPal, etc.)
        enum: ['credit_card', 'paypal', 'cash_on_delivery']
    },
    paymentStatus: {
        type: String,
        default: 'unpaid',  // Can be 'paid' or 'unpaid'
        enum: ['paid', 'unpaid']
    },
    orderDate: {
        type: Date,
        default: Date.now  // The date when the order was placed
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'  // Order status can be 'pending', 'confirmed', 'cancelled', or 'completed'
    },
    confirmationDate: {
        type: Date,  // The date when the order is confirmed
    },
    cancellationDate: {
        type: Date,  // The date when the order is cancelled
    },
    createdAt: {
        type: Date,
        default: Date.now  // Timestamp of when the order was created
    }
});

module.exports = mongoose.model('Order', orderSchema);
