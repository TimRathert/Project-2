require('../config/db.controller');

const { Comment, Image, User } = require('./');

const images = [
    {
        url: 'https://dummyimage.com/600x400/005c66/fff',
        description: 'this is a test',
        likes: 10000000000,
        user: '630d14bde0d3cb80372ea249'
    }
]

const comments = [
    {
        content: 'that was bomb',
        image: '630d0b4fb9dae18b0b7422b2',
        user: '630d14bde0d3cb80372ea249'
    }
]

const users = [
    {
        username:'JoeyC',
        password: 'myboobs'

    }
]

Image.insertMany(images)
Comment.insertMany(comments)
User.insertMany(users)
