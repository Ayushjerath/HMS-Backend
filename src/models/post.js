const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postId : { 
        type : String,
        required : true,
        unique : true,
    },
    postTitle : {
        type : String,
        required : false,
    },
    postDescription : {
        type : String,
        required : true,
    },
    postImage : {
        type : String,
        required : false,
    },
    postLikes : {
        type : Number,
        required : true,
    },
    postCommentsId : {
        type : String,
        required : true,
    },
    postComments : {
        type : Number,
        required : true,
    },
    postShares : {
        type : Number,
        required : true,
    },
    postDate : {
        type : Date,
        required : true,
    },
    UserId : {
        type : String,
        required : true,
    },
},{timestamps : true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;