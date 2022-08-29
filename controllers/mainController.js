// DEPENDENCIES
const express = require('express');
const router = express.Router();

const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES

// SHOW ROUTE
router.get('/:imageId', async (req, res, next) => {
    try{
    let context = await db.Image.findById(req.params.imageId);
    res.render('pages/show', context)
    }
    catch(err){
        console.log(err);
        require.error = err;
        return next();
    }
})


// INDEX ROUTE
router.get('/', async (req, res, next) => {
    try{
    let context = await db.Image.find({})
    res.render('pages/home', context)
    }
    catch(err){
        console.log(err);
        require.error = err;
        return next();
    }
})



module.exports = router
