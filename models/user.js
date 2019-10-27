var mongoose= require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


//User model
var userSchema= new mongoose.Schema({

    username:String,
    password:String
});


userSchema.plugin(passportLocalMongoose);

/*
userSchema.statics.findByUsername=async(username)=>{
    
    const User=await user.findOne({username})
    if(!User){
        throw new Error("There is no such username.Please Sign-up")
    }
}
*/

var user=mongoose.model("user",userSchema);

module.exports=user;