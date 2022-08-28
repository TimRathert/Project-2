// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const { application } = require('express');
require(`dotenv`).config();

// CONTROLLER IMPORT


// CONFIGS
const app = express();
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')


//MIDDLEWEAR
app.use(express.static('public'));

// CONTROLLER ROUTING


// 
app.listen(PORT,() => console.log(`Listening on port: ${PORT}`));