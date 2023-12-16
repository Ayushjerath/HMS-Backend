const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
    UserId : {
        type : String,
        required : true,
        unique : true,
    },
    name : {
        type : String,
        required : true,
    },
    DOB : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    gender : {
        type : String,
    },
    password : {
        type : String,
        unique : true,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
    phone : {
        type : Number
    }
},{timestamps : true});

// Model 
const User = mongoose.model('user',userSchema);

module.exports = User;