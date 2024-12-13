const express = require("express")
const route = express.Router()
const adminAuth = require("../middlewares/adminAuth")

const{addProduct,allProducts,removeProduct,singleProduct} = require("../controllers/productController")
const upload = require("../middlewares/multer")


route.post("/add",adminAuth,upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]),addProduct)

route.delete("/remove/:id",removeProduct)
route.get("/single/:id",singleProduct)
route.get("/list",allProducts)

module.exports = route;