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
    doctorId : {
        type : String,
        required : true,
        unqiue : true,
    },
    descp : {
        type : String,
    },
},{timestamps : true});

// Model 
const report = mongoose.model('report',reportSchema);

module.exports = report;