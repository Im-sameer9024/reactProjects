const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = () =>{

  mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
  }).then(()=>{
    console.log("Database is connected successfully")
  }).catch((error)=>{
    console.log("db connection creates an error",error)
    process.exit(1)
  })
}

module.exports = dbConnect;