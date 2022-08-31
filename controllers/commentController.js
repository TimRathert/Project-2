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
        if(req.session){
        const commentContent = {
            ...req.body,
            user: req.session.currentUser.id,
        }
        const newComment = await db.Comment.create(commentContent)
        //console.log(newComment)
        res.redirect(`/images/${newComment.image}`)
        }
    }
    catch (err) {
        console.log(err);
        req.error = err;
        return next();
    }
})
// show specific

// EDIT COMMENT
router.get('/:commentId/edit', async (req, res, next)=>{
    try{
        const editComment = await db.Comment.findById(req.params.commentId);
        //console.log(editComment)
        res.render('./pages/comments/edit', {selectedComment: editComment})
    }
    catch(err){
        console.log(err)
        req.error = err
        return next()
    }
})
// UPDATE COMMENT
router.post('/:commentId', async (req, res, next) => {
    try{
        const updatedComment = await db.Comment.findByIdAndUpdate(req.params.commentId, req.body, {new: true})
        //console.log(updatedComment.image)
        res.redirect(`/images/${updatedComment.image}`)
    }
    catch(err){
        console.log(err)
        req.error = err
        return next();
    }
})
// delete comment
router.delete('/:commentId',async (req, res, next)=>{
    try{
        const deleteIt = await db.Comment.findByIdAndDelete(req.params.commentId)
        res.redirect('back')
    }
    catch(err){
        console.log(err)
        req.error = err
        return next()
    }
    
})

module.exports = router