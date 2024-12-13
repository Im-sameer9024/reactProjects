const User = require("../models/userModel.js")

exports.addToCart = async(req,res) =>{
  try {

    const{userId,itemId,size} = req.body

    const userData = await User.findById(userId)
    let cartData = await userData.cartData;

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1
      }else{
        cartData[itemId][size] = 1
      }
    }else{

      cartData[itemId] = {}
      cartData[itemId][size] = 1;

    }

    await User.findByIdAndUpdate(userId,{cartData})

    res.status(200).json({
      success: true,
      message: "Item added to cart",
      data: cartData
    })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })
    
  }
}


exports.updateCart = async(req,res) =>{
  try {

    const{userId,itemId,size,quantity} = req.body;

    const userData = await User.findById(userId)
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await User.findByIdAndUpdate(userId,{cartData})

    res.status(200).json({
      success: true,
      message: "Item updated in cart",
      data: cartData
    })

    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })
    
  }
}


exports.getUserCart = async(req,res) =>{
  try {

    const {userId} = req.body;
    let cartData = await userData.cartData;

    res.status(200).json({
      success: true,
      message: "Cart Data",
      data: cartData
    })

    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })
    
  }
}