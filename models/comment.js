const mongoose = require('mongoose')

const commentSchema = new comment.Schema (
    {
        user:{type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'},
        timestap: Date,
        content: String,
        image: ref

    }
)

const Image = mongoose.models('Comment', commentSchema);

module.exports = Comment;