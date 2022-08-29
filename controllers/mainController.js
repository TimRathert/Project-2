// DEPENDENCIES
const express = require('express');
const router = express.Router();

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES


//NEW ROUTE
router.get('/new', (req, res) => {
    res.render('new')
})
//CREATE ROUTE
router.post('/', async (req, res, next) => {
    const newImage = req.body;
    try{
        const createdImage = await db.Image.create(newImage)
    }
    catch(err){
        console.log(err)
        require.error = err;
        return next();
    }
})


// SHOW ROUTE
router.get('/images/:imageId', async (req, res, next) => {
    try{
        const image = await db.Image.findById(req.params.imageId)
        const comments = await db.Comment.find({image: req.params.imageId})
    let context = {
        thisImage: image,
        thisComments: comments
    };
    res.render('pages/show', context)

    }    catch(err){
        console.log(err);
        require.error = err;
        return next();
    }
})


// INDEX ROUTE
router.get('/home', async (req, res, next) => {
    try{
        const allImages = await db.Image.find({})
        let context = {images: allImages}
        res.render('pages/home', context)
    }
    catch(err){
        console.log(err);
        require.error = err;
        return next();
    }
})

router.get('/', (req,res) => {
    res.redirect('/home');
})


module.exports = router
