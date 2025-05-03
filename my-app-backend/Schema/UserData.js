const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema(
    {
        username:String,
        email:String,
        name:String,
        password:String,
        isStudent:Boolean,
        history:{
            type:String,
            default:null
        }
    }
);

module.exports = mongoose.model('User',userDataSchema,'user');