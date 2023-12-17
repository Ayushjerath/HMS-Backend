const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    ActivityId : {
        type : String,
        required : true,
        unique : true,
    },
    UserId : {
        type : String,
        required : true,
        unique : true,
    },
    activityType : {
        type : String,
        required : true,
    },
    activityDate : {
        type : Date,
        required : true,
    },
    activityTitle : {
        type : String,
        required : true,
    },
    activityData : {
        type : String,
        required : true,
    },
    groupId : {
        type : String,
        required : true,
    },
},{timestamps : true});

const Activity = mongoose.model('Activity',activitySchema);

module.exports = Activity;