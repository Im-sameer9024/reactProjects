const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = () =>{
     mongoose.connect(process.env.MONGODB_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
     })
     .then(()=>{console.log("Database is connect")})
     .catch((err)=>{
        console.log(err.message)
        process.exit(1)
     })
}

module.exports = dbConnect;