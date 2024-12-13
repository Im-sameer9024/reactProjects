const express = require("express")
const app = express();
const cookieParser = require('cookie-parser')
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 4000
const dbConnect = require("./config/database")
const connectCloudinary = require("./config/cloudinary")
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoute = require("./routes/cartRoutes")
const orderRoute = require("./routes/orderRoute");


//<------------ middlewares ------------ > 
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//<----------------- database connection & cloudinary ------------- >
dbConnect();
connectCloudinary();


//<---------------------- api endpoints---------------- >
app.use('/api/user',userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRoute)




app.get("/",(req,res) =>{
  res.send("API Working")
})

app.listen(port,()=>{
  console.log(`Server is started on ${port}`)
})