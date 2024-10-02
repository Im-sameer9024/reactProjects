const User = require("../models/userModel.js")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()





//<---------------- Login user------------- >

exports.login = async (req, res) => {
  try {

    const{email,password} = req.body;


    if(!email || !password){
      return res.status(400).json({
        success:false,
        message:"Fill the input carefully"
    })
    }

    const user = await User.findOne({email})


    if(!user){
      return res.status(401).json({
        success: false,
        message: "User is not exists"
      })
    }


    const payload = {
      email:user.email,
      id:user._id,
    }

    if(await bcrypt.compare(password,user.password)){
     
      let token = jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:'2h'
      })

      user.token = token,
      user.password = undefined;

    }else{
      return res.status(403).json({
        success:false,
        message:"password Incorrect"
      })
    }

    return res.json({
      success:true,
      message:"Login successfully"
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success:false,
      message:"Login Failure"
    })
  }
}

//<----------------------- Register user--------------------- >

exports.register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const exists = await User.findOne({ email })

    if (exists) {
      return res.status(401).json({
        success: false,
        message: "User is already Registered"
      })
    }

    if (!validator.isEmail(email)) {
      return res.status(403).json({
        success: false,
        message: "Please enter a valid email"
      })
    }

    if (password.length < 8) {
      return res.status(403).json({
        success: false,
        message: "Please enter a Strong Password"
      })
    }

    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10)
    } catch (error) {
      return res.json({
        success: false,
        message: "some is hashing password"
      })
    }

    let user = new User({
      name, email, password: hashPassword,
    })

   const updatedUser = await user.save()

   res.status(200).json({
    success:true,
    message:"user Registered",
    updatedUser,
})

    
  } catch (error) {

    console.log(error)
    res.status(500).json({
        success:false,
        message:"Network issues"
    })

  }

}

//<---------------------------- Admin user------------------------ >

exports.admin = async (req, res) => {
  try {

  } catch (error) {

  }
}