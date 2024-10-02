const express = require("express")
const route = express.Router()

const{login,register,admin} = require("../controllers/userController")


route.post("/login",login)
route.post("/register",register)
route.post("/admin",admin)


module.exports = route;