const express = require("express")
const Route = express.Router()
const{loginUser,registerUser} = require('../controllers/userController')

Route.post('/register',registerUser)
Route.post('/login',loginUser)

module.exports = Route;