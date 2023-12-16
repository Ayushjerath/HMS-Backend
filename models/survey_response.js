const mongoose = require('mongoose');

// Schema
const surveyResponseSchema = new mongoose.Schema({
    responseId : {
        type : String,
        required : true,
        unique : true,
    },
    questionId : {
        type : String,
        required : true,
        unique : true,
    },
    userId : {
        type : String,
        required : true,
        unqiue : true,
    },
    response : {
        type : String,
        required : true,
    },
    surveyId : {
        type : String,
        required : true,
        unique : true,
    }
},{timestamps : true});

// Model 
const surveyResponse = mongoose.model('surveyResponse',surveyResponseSchema);

module.exports = surveyResponse;