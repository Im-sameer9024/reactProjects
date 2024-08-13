const express = require("express")
const Route = express.Router()
const {addFood,listFood, removeFood} = require("../controllers/foodController")

// file uploads ~
const multer = require("multer")

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb) =>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


// All routes 

Route.post("/add",upload.single("image"),addFood)
Route.get("/list",listFood)
Route.post("/remove",removeFood)

module.exports = Route;