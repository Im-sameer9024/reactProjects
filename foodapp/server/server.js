const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const dbConnect = require("./config/database")
const port = process.env.PORT
const user = require("../server/routes/userRoute")
const food = require("../server/routes/foodRoute")
dbConnect()


app.use(express.json())
app.use(cors())
app.use('/images',express.static("uploads"))
app.use("/api",food)
app.use("/api",user)


app.get("/",(req,res)=>{
     res.send("This is Home Page.")
})

app.listen(port,()=>{
    console.log("port is on ",port)
})