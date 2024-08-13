const User = require("../models/userSchema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const validator = require("validator")
require("dotenv").config()

exports.loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: "User does not exists" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" })
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token: token
    })


    

    res.status(200).json({ 
      success: true, 
      token: createToken(user._id) 
    })
    
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Error in server"

    })
  }
}

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

exports.registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;
    const existsUser = await User.findOne({ email })
    if (existsUser) {
      return res.status(400).json({
        success:false,
        message: "User already exists" })
    }

    // Validating email format & password format 

    if (!validator.isEmail(email)) {
      return res.status(400).json({ 
        success:false,
        message: "Invalid email format" })
    }

    if (password.length < 8 ) {
      return res.json(400).json({
        success: false,
        message: "Password must be at least 8 characters long"
      })
    }

    // hashing Password 

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({ name: name, email: email, password: hashedPassword })
    const userData = await user.save()

    const token = createToken(userData._id)

    res.status(200).json({ success: true, token })

  } catch (err) {
    console.log(err)
    res.status(404).json({
      success: false,
      message: "Error"
    })
  }
}