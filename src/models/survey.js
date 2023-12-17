const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    surveyId: {
        type: String,
        required: true,
        unique: true,
    },
    surveyTitle: {
        type: String,
        required: false,
    },
    surveyDescription: {
        type: String,
        required: false,
    },
    surveyImage: {
        type: String,
        required: false,
    },
    surveyDate: {
        type: Date,
        required: false,
    },
    surveyUserNumber: {
        type: Number,
        required: true,
    },

    // Need to be reviewed
    surveyQuestions: [{
        questionId: {
            type: String,
            required: true,
        },
        questionText: {
            type: String,
            required: true,
        },
        options: [{
            optionId: {
                type: String,
                required: true,
            },
            optionText: {
                type: String,
                required: true,
            },
        }],
    }],

    surveyActive: {
        type: Boolean,
        default: true,
    },
    surveyCreatedBy: {
        type: String,
        required: true,
    },
    surveyModifiedBy: {
        type: String,
    },
    participants: [{
        userId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['pending', 'completed', 'skipped'],
            default: 'pending',
        },
    }],
}, { timestamps: true });

const Survey = mongoose.model('Survey', surveySchema);
module.exports = Survey;
