const express = require("express")
const cors = require("cors");
const app = express();
require("dotenv").config()
const port = process.env.PORT || 5000
const dbConnect = require("./config/database");


// middlerwares 

app.use(cors());
app.use(express.json());


dbConnect();

app.get("/",(req,res) =>{
  res.send("This is Home Page")
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})
