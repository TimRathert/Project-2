const mongoose = require('mongoose');
require('dotenv').config();

// MONGODB PATH
// const mongoURI =
// ^ HERE ^

mongoose.connect(mongoURI);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected`)
})
mongoose.connection.on(`error`, () => {
    console.log(`MongoDB connection error`, error)
})
mongoose.connection.on(`disconnected`, () => {
    console.log(`MongoDB disconnected`)
})
