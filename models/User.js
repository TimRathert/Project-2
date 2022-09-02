const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'You must provide a username'],
            maxLength: 20,
        },
        profImage: {
            type: String,
            default: "https://dummyimage.com/200x200/000/fff",
        },
        password: {
            type: String,
            required: [true, 'You must provide a password'],
            minLength: [3, 'Password must be at least 3 characters']
        },
    },
    { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

module.exports = User;