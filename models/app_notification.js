const mongoose = require('mongoose');

// Schema
const appNotificationSchema = new mongoose.Schema({
    NotificationId : {
        type : String,
        required : true,
        unique : true,
    },
    UserId : {
        type : String,
        required : true,
        unique : true,
    },
    msg : {
        type : String,
        required : true,
    },
},{timestamps : true});

// Model 
const AppNotification = mongoose.model('app_notification',appNotificationSchema);

module.exports = AppNotification;