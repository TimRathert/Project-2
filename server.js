// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const { application } = require('express');
require(`dotenv`).config();
require('./config/db.controller')

// CONTROLLER IMPORT
const mainController = require(`./controllers/mainController.js`);
const commentController = require(`./controllers/commentController.js`);

// CONFIGS
const app = express();
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')


//MIDDLEWEAR
app.use(express.static('public'));


// CONTROLLER ROUTING
app.use('/', mainController)
app.use('/comments', commentController);


// 
app.listen(PORT,() => console.log(`Listening on port: ${PORT}`));