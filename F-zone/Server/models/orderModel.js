const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },

  status: {
    type: String,
    required: true,
    default: 'Order Placed',
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    default: Date.now,

  },
})

module.exports = mongoose.model('Order', orderSchema);