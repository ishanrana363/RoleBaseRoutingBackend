const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const userSchema = new Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String
    },
    role : {
        type : String,
        enum : ["user","admin","super-admin","teacher","gurdian"],
        default :"user"
    }
},{timestamps:true,versionKey:false});


const userModel = model("users", userSchema );


module.exports = userModel;