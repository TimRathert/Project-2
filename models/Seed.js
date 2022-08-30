require('../config/db.controller');

const { Comment, Image, User } = require('./');

const images = [
    {
        url: 'https://dummyimage.com/600x400/005c66/fff',
        description: 'this is a test',
        likes: 10000000000,
        user: '630d14bde0d3cb80372ea249',
        
    },
    {
        url: '',
        description: 'this is beans',
        likes: 20,
        user:'',

    },
    {
        url: '',
        description: 'man oh man',
        likes: 500,
        user: ''
    }
    
]

const comments = [
    {
        content: 'that was bomb',
        image: '630d0b4fb9dae18b0b7422b2',
        user: '630d14bde0d3cb80372ea249'
    },
    {
        content: 'ayo?',
        image: '30d0b4fb9dae18b0b7422b2',
        user: '630d1de110ea9c8b613f6e5a'
    },
    {
        content: 'hey',
        image: '30d0b4fb9dae18b0b7422b2',
        user: '630d15b4cb97ad903d4b6eff'
    }
    
]

const users = [
    {
        username:'JoeyC',
        password: 'myboobs'

    },
    {
        username: 'TullieN',
        password: 'Boba'
    },
    {
        username: 'Timbo',
        passowrd: 'beans'
    }
]

// Image.insertMany(images)
// Comment.insertMany(comments)
User.insertMany(users)
