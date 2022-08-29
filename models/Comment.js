const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema (
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        },
        timestap: Date,
        content: String,
        image: {
            type: mongoose.Types.ObjectId,
            ref: 'Image'
        }

    },
    { timestamps: true },
);

const Comment = mongoose.models('Comment', commentSchema);

module.exports = Comment;