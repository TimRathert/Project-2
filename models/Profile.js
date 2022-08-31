const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema (
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        image: {
            type: mongoose.Types.ObjectId,
            ref: 'Image'
        },
        profImage: {
            type: String,
            default: "https://dummyimage.com/200x200/000/fff",
        }
    },
    {timestamps: true},
);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;