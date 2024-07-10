const express = require("express")
const app = express()
const cors = require("cors")
const userRouter = require("./routes/userRouter")
const dbConnect = require("./config/Database")
require('dotenv').config()

const port = process.env.PORT
dbConnect()
app.use(express.json())
app.use(cors())

app.use("/api/v1",userRouter)

app.listen(port,()=>{
    console.log(`Server is on ${port}`)
})

