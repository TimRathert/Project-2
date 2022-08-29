const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'You must provide a username']
        },
        profImage: {
            type: String,
            default: "https://dummyimage.com/200x200/000/fff",
        },
        password: {
            type: String,
            required: [true, 'You must provide a password'],
        }
    },
    { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

module.exports = User;