const mongoose = require('mongoose');
require("dotenv").config()

const dbConnect = () =>{
  mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }).then(()=>{
    console.log("Database connection established successfully")
  })
  .catch((err) =>{
    console.log(err)
  })
}


module.exports = dbConnect;