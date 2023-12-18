const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userDob: {
        type: Date,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
    },
    userGender: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
    adminRole: {
        type: Boolean,
        required: true,
    },
    userStatus: {
        type: String,
        required: true,
    },
    userPhone: {
        type: Number,
        required: true,
    },
    userStreet: {
        type: String,
        required: false,
    },
    userCity: {
        type: String,
        required: false,
    },
    userState: {
        type: String,
        required: false,
    },
    userCountry: {
        type: String,
        required: false,
    },
    userZip: {
        type: String,
        required: false,
    },
    userImage: {
        type: String,
        required: false,
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
