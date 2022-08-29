const mongoose = require('mongoose')

const imageSchema = new image.Schema (
    {
        
        url: String,
        description: String,
        timestamp: Date,
        likes: Number,
        comments_db: []

    }
)

const Image = mongoose.models('Image', imageSchema);

module.exports = Image;