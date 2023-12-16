const mongoose = require('mongoose');

// Schema
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
    type : {
        type : String,
        required : true,
    },
},{timestamps : true});

// Model 
const Activity = mongoose.model('activity',activitySchema);

module.exports = Activity;