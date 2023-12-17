const mongoose = require('mongoose');

// Schema
const survey_questionSchema = new mongoose.Schema({
    questionId : {
        type : String,
        required : true,
        unique : true,
    },
    questionType : {
        type : String,
        required : true,
    },
    questionTest : {
        type : String,
        required : true,
    },
    questionOptions : {
        type : String,
        required : true,
    },
    surveyId : {
        type : String,
        required : true,
        unique : true,
    },
},{timestamps : true});

// Model 
const Survey_Question = mongoose.model('Survey_Question',survey_questionSchema);

module.exports = Survey_Question;