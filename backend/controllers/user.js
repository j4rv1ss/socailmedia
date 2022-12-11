const userModel = require("../models/user")

exports.register = async (req,res) =>{
try {
    const {name, email, password} = req.body

    let user = await userModel.findOne({email})

    if(user) return res.status(400).send({status:false, msg: "user already exists."})
} catch (error) {
    res.status(500).send({status:false, msg:error.message})
}
}