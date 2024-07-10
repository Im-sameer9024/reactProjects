const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
    },
    lastName:{
        type:String,
        trim:true,
    },

    email:{
        type:String,
        trim:true,
    },
    country:{
        type:String,
        trim:true,
    },
    state:{
        type:String,
        trim:true,
    },
    city:{
        type:String,
        trim:true,
    },
    code:{
        type:Number,
        trim:true,
    },
    comments:{
        type:String,
        trim:true,
    },
    candidates:{
        type:String,
        trim:true,
    },
    offers:{
        type:String,
        trim:true,
    },
    pushNotifications:{
        type:String,
        trim:true,
    },

})

module.exports = mongoose.model("User",UserSchema)