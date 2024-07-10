const express = require("express")
const router = express.Router()

const {signup} = require("../controllers/user")

router.post("/user",signup)

module.exports = router