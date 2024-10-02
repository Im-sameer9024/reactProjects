const express = require("express")
const route = express.Router()

const{addProduct,allProducts,removeProduct,singleProduct} = require("../controllers/productController")
const upload = require("../middlewares/multer")


route.post("/add",upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]),addProduct)
route.post("/remove",removeProduct)
route.post("/single",singleProduct)
route.get("/list",allProducts)

module.exports = route;