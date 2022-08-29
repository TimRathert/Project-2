const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema (
    {
        url: {
            type: String,
            required: [true, "You must provide an image"]
        },
        description: {type:String},
        likes: {type: Number},
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true },
);

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;