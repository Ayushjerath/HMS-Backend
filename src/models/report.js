const mongoose = require('mongoose');

// Schema
const reportSchema = new mongoose.Schema({
    reportId : {
        type : String,
        required : true,
        unique : true,
    },
    userId : {
        type : String,
        required : true,
        unqiue : true,
    },
    docId : {
        type : String,
        required : true,
        unqiue : true,
    },
    reportData : {
        type : String,
    },
},{timestamps : true});

// Model 
const Report = mongoose.model('Report',reportSchema);

module.exports = Report;