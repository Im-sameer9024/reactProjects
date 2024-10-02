const express = require("express")
const app = express();
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 4000
const dbConnect = require("./config/database")
const connectCloudinary = require("./config/cloudinary")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")



//<------------ middlewares ------------ > 
app.use(express.json())
app.use(cors())


//<----------------- database connection & cloudinary ------------- >
dbConnect();
connectCloudinary();


//<---------------------- api endpoints---------------- >
app.use('/api/user',userRoutes)
app.use("/api/product",productRoutes)




app.get("/",(req,res) =>{
  res.send("API Working")
})

app.listen(port,()=>{
  console.log(`Server is started on ${port}`)
})