const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema (
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        },
        content: {type: String},
        image: {
            type: mongoose.Types.ObjectId,
            ref: 'Image'
        }

    },
    { timestamps: true },
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;