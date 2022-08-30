// Dependencies
const express = require('express')
const router = express.Router()

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES



// populate route