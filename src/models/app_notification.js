const mongoose = require('mongoose');

const appNotificationSchema = new mongoose.Schema({
    notificationId: {
        type: String,
        required: true,
        unique: true,
    },
    notificationText: {
        type: String,
        required: true,
    },

    // Need to be reviewed
    // Specify the notificationType - message, alert, update, etc.
    notificationType: {
        type: String,
        required: true,
    },
    // 1 - low, 2 - medium, 3 - high
    priority: {
        type: Number,
        default: 1,
    },
    groupId: {
        type: Number,
    },
    isSend: {
        type: Boolean,
        default: false,
    },
    // 3 days after creation
    expirationDate: {
        type: Date,
    },
});

const AppNotification = mongoose.model('AppNotification', appNotificationSchema);

module.exports = AppNotification;
