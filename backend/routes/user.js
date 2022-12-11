const express = require("express")

const userController = require("../controllers/user")

const router = express.Router()

router.post("/user/upload", userController.register)

module.exports = router