const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema (
    {
        url: {
            type: String,
            required: [true, "You must provide an image"],
        },
        description: String,
        timestamp: Date,
        likes: Number,
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
        
    },
    { timestamps: true },
);

const Image = mongoose.models('Image', ImageSchema);

module.exports = Image;