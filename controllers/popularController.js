// Dependencies
const express = require('express')
const router = express.Router()

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES



// populate route
router.get('/', async (req, res, next)=>{
    try{
        const popularPost = await db.Popular.find().populate('likes').exec
        const allImages = await db.Image.find({})
        res.render('/pages/popular.ejs', {popular: popularPost, images: allImages})
    }
    catch(error){
        console.log(err);
        req.error = err;
        return next();
    }
})