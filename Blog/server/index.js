const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 4000
const dbConnect = require("./config/database")




app.use(express.json())

dbConnect()


app.get("/",(req,res) =>{
  res.send("This is Blog app")
})

app.listen(port, () =>{
console.log(`Port is on ${port}`)
})
