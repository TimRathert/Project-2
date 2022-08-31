// DEPENDENCIES
const { Router } = require('express');
const express = require('express');
const router = express.Router();

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const authRequired = function (req, res, next){
    if (req.session.currentUser){
        return next();
    }
    return res.redirect('/auth/login')
};


// ROUTES


//NEW ROUTE
router.get('/images/new', authRequired, (req, res) => {
    res.render('pages/create.ejs')
})
//CREATE ROUTE
router.post('/images', async (req, res, next) => {
    try{    
        const newImage = {
            ...req.body,
            user: req.session.currentUser.id,
        };
        const createdImage = await db.Image.create(newImage)
        res.redirect(`/images/${createdImage._id}`)
        
    }
    catch(err){
        console.log(err)
        require.error = err;
        return next();
    }
})

// likes
router.put('/images/:imageId', async (req, res, next)=>{
    try{
        const likeIt = await db.Image.findById(req.params.imageId);
        likeIt.likes = likeIt.likes + 1
        const updatedLike = await db.Image.findByIdAndUpdate(req.params.imageId, likeIt,{new: true})
        console.log(updatedLike)
        res.redirect(`/images/${req.params.imageId}`)
    }
    catch(err){
    console.log(err)}
})


// SHOW ROUTE
router.get('/images/:imageId', async (req, res, next) => {
    try{
        const image = await db.Image.findById(req.params.imageId).populate('user').exec()     
        const comments = await db.Comment.find({image: req.params.imageId}).populate('user').exec()
        
    let context = {
        thisImage: image,
        thisComments: comments,

    };
    res.render('pages/show.ejs', context)

    } catch(err){
        console.log(err);
        req.error = err;
        return next();
    }
})

// PROFILE ROUTE
router.get('/user/:id', authRequired, async (req, res, next) => {
    try{
        const profilePage = await db.User.findById(req.params.id)
        const userImage = await db.Image.find({user: req.params.id})
        // console.log(user)
        const context = {
            thisPage: profilePage,
            thisUser: userImage,
            
        };
        res.render('pages/profile.ejs', context)
    }
    catch(err){
        console.log(err);
        req.error= err;
        return next()
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
        const deleteComments = await db.Comment.deleteMany({image: deletedImage})
        console.log(deletedImage, deleteComments);
        res.redirect('/home')
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

// About page
router.get('/about', (req, res) => {
    res.render('pages/about.ejs')
})

// Popular
// router.get('/popular', (req, res) => {
//     const mostPopular = await db.Popular.findById(req.params.popular)
//     res.render('pages/popular.ejs')
// })

//REDIRECT TO HOME
// router.get('/*', (req,res) => {
//     res.redirect('/home');
// })


module.exports = router
