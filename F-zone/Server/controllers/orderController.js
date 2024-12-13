const Order = require("../models/orderModel")
const User = require("../models/userModel")


exports.placeOrder = async (req, res) => {
  try {

    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      paymentMethod: 'COD',
      payment: false,
      date: Date.now(),
    }

    const newOrder = new Order(orderData)
    await newOrder.save()

    await User.findByIdAndUpdate(userId, { cartData: {} })

    res.status(200).json({
      success: true,
      message: "Order placed",
      order: newOrder
    })



  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })

  }
}


exports.placeOrderStripe = async (req, res) => {
  try {

  } catch (error) {

  }
}


exports.placeOrderRazorpay = async (req, res) => {
  try {

  } catch (error) {

  }
}

exports.allOrders = async (req, res) => {
  try {

  } catch (error) {

  }
}

exports.userOrders = async (req, res) => {
  try {

    const { userId } = req.body;
    const orders = await Order.find({ userId });

    res.status(200).json({
      success: true,
      message: "User's orders",
      orders
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })

  }
}

exports.updateStatus = async (req, res) => {
  try {

  } catch (error) {

  }
}
