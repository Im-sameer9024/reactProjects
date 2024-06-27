const express = require("express")
const app = express();
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 4000
const user = require("./routes/user")
const dbConnect = require("./config/database")
dbConnect()


app.use(cors())

app.use(express.json())
app.use("/api/v1",user)

console.log(port)

app.listen(port,()=>{
    console.log(`App is on ${port} Port`)
})

