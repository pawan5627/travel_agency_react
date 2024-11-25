// controllers/dealController.js
const Deal = require('../models/Deal');

// Create a new deal
exports.createDeal = async (req, res) => {
  const { name, description, price, category, destinations, expiredAt } = req.body;
  try {
    const newDeal = new Deal({
      name,
      description,
      price,
      category,
      destinations,
      createdBy: req.user.id,
      expiredAt,
    });

    await newDeal.save();
    res.status(201).json({ message: 'Deal created successfully', deal: newDeal });
  } catch (err) {
    res.status(500).json({ message: 'Error creating deal', error: err.message });
  }
};

// Get all deals
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find().populate('createdBy', 'name email').populate('destinations');
    res.status(200).json(deals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching deals', error: err.message });
  }
};

// Get a single deal by ID
exports.getDealById = async (req, res) => {
  const { id } = req.params;
  try {
    const deal = await Deal.findById(id).populate('createdBy', 'name email').populate('destinations');
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    res.status(200).json(deal);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching deal', error: err.message });
  }
};

// Update a deal by ID
exports.updateDeal = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, destinations, expiredAt } = req.body;
  try {
    const updatedDeal = await Deal.findByIdAndUpdate(
      id,
      { name, description, price, category, destinations, expiredAt },
      { new: true }
    ).populate('createdBy', 'name email').populate('destinations');
    
    if (!updatedDeal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    
    res.status(200).json({ message: 'Deal updated successfully', deal: updatedDeal });
  } catch (err) {
    res.status(500).json({ message: 'Error updating deal', error: err.message });
  }
};

// Delete a deal by ID
exports.deleteDeal = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDeal = await Deal.findByIdAndDelete(id);
    if (!deletedDeal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    res.status(200).json({ message: 'Deal deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting deal', error: err.message });
  }
};
