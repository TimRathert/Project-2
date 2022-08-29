// DEPENDENCIES
const express = require('express');
const router = express.Router();

//const db = require('../models')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// ROUTES

// SHOW ROUTE
router.get('/:imageId', async (req, res, next) => {
    try{
    // let context = await db.Images.findById(req.params.iamgeId)
    res.render('pages/show') // pass context 
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
    // let context = await db.Images.find({})
    res.render('pages/home') // pass context 
    }
    catch(err){
        console.log(err);
        require.error = err;
        return next();
    }
})



module.exports = router
