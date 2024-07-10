const mongoose = require("mongoose")
const User = require("../models/Userschema")


exports.signup = async(req,res)=>{
    try {
        console.log(req.body)
        const{firstName,lastName,email,country,state,city,code,comments,candidates,offers,pushNotifications}=req.body

        const data = new User({firstName,lastName,email,country,state,city,code,comments,candidates,offers,pushNotifications})

        const savedData = await data.save()

        res.status(200).json({
            success:true,
            data:savedData,
            message:"successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            data:"error",
            message:"Network Issues"
        })
    }
}