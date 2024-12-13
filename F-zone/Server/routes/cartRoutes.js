const express = require('express');
const route = express.Router()
const userAuth = require("../middlewares/userAuth")
const { getUserCart ,addToCart,updateCart} = require('../controllers/cartController');


route.post("/get",userAuth,getUserCart)
route.post("/add",userAuth,addToCart)
route.post("/update",userAuth,updateCart)

module.exports = route;
