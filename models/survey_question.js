const mongoose = require('mongoose');

// Schema
const surveyQuestionSchema = new mongoose.Schema({
    questionId : {
        type : String,
        required : true,
        unique : true,
    },
    surveyId : {
        type : String,
        required : true,
        unique : true,
    },
    type : {
        type : String,
        required : true,
    },
    question : {
        type : String,
        required : true,
    }
},{timestamps : true});

// Model 
const surveyQuestion = mongoose.model('surveyQuestion',surveyQuestionSchema);

module.exports = surveyQuestion;