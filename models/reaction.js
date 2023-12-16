const mongoose = require('mongoose');

// Schema
const reactionSchema = new mongoose.Schema({
    reactionId : {
        type : String,
        required : true,
        unique : true,
    },
    userId : {
        type : String,
        required : true,
        unqiue : true,
    },
    postId : {
        type : String,
        required : true,
        unqiue : true,
    },
    type : {
        type : String,
        required : true,
    },
},{timestamps : true});

// Model 
const reaction = mongoose.model('report',reactionSchema);

module.exports = reaction;