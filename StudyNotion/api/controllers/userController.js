/* eslint-disable no-undef */
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const Login = require("../models/loginSchema")
const Signup = require("../models/signupSchema")

exports.signup = async(req,res)=>{
    try {
        
        const{firstName,lastName,email,createPassword,confirmPassword} = req.body;

        const existingUser = await Signup.findOne({email});

        if(email){
            return res.status(400).json({
                success:false,
                message:"User Already Exists"
            })
        }
        let hashedCreatePassword;
        let hashedConfirmPassword;
        try{

            hashedCreatePassword = await bcrypt.hash(createPassword,10);
            hashedConfirmPassword = await bcrypt.hash(confirmPassword,10);

        }catch(err){
            return res.status(500).json({
                success:false,
                message:"Error inn hashing"
            })

        }

        const signupUser = await Signup.create({
            firstName,lastName,email,createPassword:hashedCreatePassword,confirmPassword:hashedConfirmPassword
        })
        return res.status(200).json({
            success:true,
            message:"User Registered"
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

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details"
            })
        }

        let loginUser = await Login.findOne({email});

        if(!loginUser){
            return res.status(401).json({
                success:false,
                message:"user is not Registered"
            })
        }

        const payload = {
             email:loginUser.email,
             id:loginUser._id,
        }

        if(await bcrypt.compare(password,loginUser.password)){

            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h"
            });

            loginUser.token = token;
            loginUser.password = undefined;
        }else {
            //passwsord do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }

  

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Network issue'
        })
    }
}


