const mongoose = require('mongoose');

// Schema
const survey_responseSchema = new mongoose.Schema({
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
    responseText : {
        type : String,
        required : true,
    },
    responseOption : {
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
const Survey_Response = mongoose.model('Survey_Response',survey_responseSchema);

module.exports = Survey_Response;