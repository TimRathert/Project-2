// DEPENDENCIES
const express = require('express');
const router = express.Router();

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES


//NEW ROUTE
router.get('/new', (req, res) => {
    res.render('pages/create.ejs')
})
//CREATE ROUTE
router.post('/images', async (req, res, next) => {
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
        const user = await db.User.findById(image.user)
        
    let context = {
        thisImage: image,
        thisComments: comments,
        thisUser: user
    };
    res.render('pages/show.ejs', context)

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
        res.render('pages/home.ejs', context)
    }
    catch(err){
        console.log(err);
        require.error = err;
        return next();
    }
})

// DESTROY
router.delete('/images/:imageId', async (req,res, next) => {
    try{
        const deletedImage = await db.Image.findByIdAndDelete(req.params.imageId);
        console.log(deletedImage);
        res.redirect('/home.ejs')
    }
    catch(err){
        console.log(err);
        req.error = err;
        return next();
    }
})

// EDIT ROUTE
router.get('/images/:imageId/edit', async (req,res,next) => {
    try{
        const updatedImage = await db.Image.findById(req.params.imageId);
        console.log(updatedImage);
        res.render('pages/edit.ejs', updatedImage)
    }
    catch(err){
        console.log(err);
        req.error = err;
        return next();
    }
})

// UPDATE ROUTE
router.put('/images/:imageId', async (req, res, next) => {
    try{
        const newImageData = req.body;
        await db.Image.findByIdAndUpdate(
            req.params.imageId, 
            newImageData, 
            {new: true});
        res.redirect(`/images/${req.params.imageId}`);
    }
    catch(err){
        console.log(err);
        req.error = err;
        return next();
    }
})

//REDIRECT TO HOME
// router.get('/*', (req,res) => {
//     res.redirect('/home');
// })


module.exports = router
