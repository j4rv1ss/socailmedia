const post = require("../models/post")

exports.createPost = async (req,res) =>{
try {
    const data = req.body
} catch (error) {
    res.status(500).send({status:false, msg:error.message})
}
}

