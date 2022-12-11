const express = require("express")

const app = express()
require("dotenv").config({path:"backend/config/config.env"})
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const post = require("./routes/post")
const user = require("./routes/user")

app.use("/api",post)
app.use("/api",user)
module.exports = app 