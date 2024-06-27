const mongoose = require("mongoose")

const signupSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },

    lastName:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
        required:true,
    },

    createPassword:{
        type:String,
        required:true,
    },

    confirmPassword:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Signup",signupSchema)