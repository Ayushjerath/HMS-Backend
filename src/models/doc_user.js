const mongoose = require('mongoose');

const doc_userSchema = new mongoose.Schema({
    docId : {
        type : String,
        required : true,
    },
    userId : {
        type : String,
        required : true,
    },
    reportId : {
        type : String,
        required : true,
    },
    // Check doctor is available or not(on a holiday or in hospital)
    docActive : {
        default : true,
        type : Boolean,
        required : true,
    },
    // Check user is active or not
    userActive : {
        default : true,
        type : Boolean,
        required : true,
    },
    // Check doctor is available or not
    docStatus : {
        type : Boolean,
        required : true,
    },
});

const Doc_User = mongoose.model('Doc_User', doc_userSchema);

module.exports = Doc_User;