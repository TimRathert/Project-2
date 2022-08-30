// DEPENDENCIES
const express = require('express');
const router = express.Router();

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES

// get all comments
router.get('/', async (req, res, next) => {
    try {
        const allComments = await db.Comment.find().populate('image').exec()
        const allImages = await db.Image.find({})
        res.render('pages/comments/index', {comments: allComments, images: allImages})
    }
    catch (err) {
        console.log(err);
        req.error = err;
        return next();
    }
});
// new comment
router.post('/', async (req, res, next) => {
    try{
        const newComment = await db.Comment.create(req.body)
        console.log(newComment)
        res.redirect(`/images/${newComment.image}`)
    }
    catch (err) {
        console.log(err);
        req.error = err;
        return next();
    }
})
// show specific

// edit comment

// delete comment

module.exports = router