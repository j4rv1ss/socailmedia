const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
     name:{
        type:String,
        required:[true, "Please enter a name"]
     },
     avtar:{
        public_id:String,
        url:String
     },
     email:{
        type:String,
        required:[true, "Please enter a email"],
        unique:[true, "email alreay exist"]
     },
     password:{
        type:String,
        required: [true, "Please enter a password"],
        minlength:[6,"password must be atleast 6 characters"],
        select:false
     },
     posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"post"
     }],
      followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
      ],
      following:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
      ]
})

module.exports.postSchema = mongoose.model("user", userSchema)