const express = require('express')
const route = express.Router();



const{placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus} = require("../controllers/orderController");

const userAuth = require('../middlewares/userAuth');

const adminAuth = require('../middlewares/adminAuth');



// Admin features 
route.post("/list",adminAuth,allOrders)
route.post("/status",adminAuth,updateStatus)

// Payment features 
route.post("/place",userAuth,placeOrder)
route.post("/stripe", placeOrderStripe)
route.post("/razorpay", placeOrderRazorpay)


// user features 

route.post("/userorders",userAuth,userOrders)

module.exports = route;