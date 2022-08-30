// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const { application } = require('express');
const methodOverride = require('method-override');
require(`dotenv`).config();
require('./config/db.controller')

// CONTROLLER IMPORT
const mainController = require(`./controllers/mainController.js`);

// CONFIGS
const app = express();
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')


//MIDDLEWEAR
app.use(express.static('public'));
app.use(methodOverride('_method'));



// CONTROLLER ROUTING
app.use('/', mainController)


// 
app.listen(PORT,() => console.log(`Listening on port: ${PORT}`));