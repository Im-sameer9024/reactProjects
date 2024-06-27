/* eslint-disable no-undef */
const bcrypt = require("bcrypt")
const Login = require("../models/loginSchema")
const Signup = require("../models/signupSchema")

exports.signup = async(req,res)=>{
    try {
        
        const{firstName,lastName,email,createPassword,confirmPassword} = req.body;

        const signupUser = await Signup.create({firstName,lastName,email,createPassword,confirmPassword})

        res.status(200).json({
            success:true,
            data:signupUser,
            message:"User successfully Registered"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"User can't Registered."
        })
    }
}



 exports.login = async(req,res)=>{
    try {
        
        const{email,password} = req.body;


        const loginUser = await Login.create({email,password})
        
        res.status(200).json({
            success:true,
            loginData:loginUser,
            message:"User Successfully Login"
        })

  

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Network issue'
        })
    }
}


