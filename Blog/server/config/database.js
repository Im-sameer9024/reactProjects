const mongoose = require("mongoose")
require("dotenv").config()


const dbConnect = () =>{
  mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
  })
  .then(() =>{
    console.log("database is Connected")
  })

  .catch((error) =>{
    console.log(error)
  })
}

module.exports = dbConnect;