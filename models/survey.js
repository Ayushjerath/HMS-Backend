const mongoose = require('mongoose');

// Schema
const surveySchema = new mongoose.Schema({
    surveyId : {
        type : String,
        required : true,
        unique : true,
    },
    title : {
        type : String,
    },
    descp : {
        type : String,
    },
},{timestamps : true});

// Model 
const survey = mongoose.model('survey',surveySchema);

module.exports = survey;