const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    commentId : {
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
    commentText : {
        type : String,
        required : true,
    },
},{timestamps : true});

// Model 
const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;