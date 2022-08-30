// DEPENDENCIES
const express = require('express');
const router = express.Router();

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES

// get all comments
router.get('/:id/', async (req, res, next) => {


})
// new comment

// show specific

// edit comment

// delete comment

module.exports = router