const mongoose = require('mongoose');

const user_groupSchema = new mongoose.Schema({
    groupId : {
        type : String,
        required : true,
        unique : true,
    },
    userId : {
        type : String,
        required : true,
        unique : true,
    },
    groupName : {
        type : String,
        required : true,
    },
    groupDescription : {
        type : String,
        required : true,
    },
},{timestamps : true});

const User_Group = mongoose.model('User_Group',user_groupSchema);

module.exports = User_Group;