const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema (
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
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