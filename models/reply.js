const mongoose = require('mongoose')

const replySchema = new reply.Schema (
    {
        user:{type: mongoose.Schema.Types.ObjectId,
            ref: 'reply'},
        timestap: Date,
        content: String,
        replies: []

    }
)

const Image = mongoose.models('Reply', replySchema);

module.exports = Reply;