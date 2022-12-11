const express = require("express")

const postController = require("../controllers/post")

const router = express.Router()

router.post("/post/upload", postController.createPost)

module.exports = router