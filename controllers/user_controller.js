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


// PROFILE ROUTE
router.get('/:id', authRequired, async (req, res, next) => {
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

// delete user

router.delete('/:id', authRequired, async (req, res, next)=>{
    try{
        const deleteUser = await db.User.deleteUser()
        console.log(deleteUser);
    }
    catch(err){
        console.log(err)
        return next()
    }

})






module.exports = router
