const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");

router.get("/register", function (req, res) {
    return res.render("pages/auth/register");
  });

router.get("/login", function (req, res) {
  res.render("pages/auth/login");
});

router.post('/register', async (req, res, next) => {
    try{
        const doesExist = await User.exists({username: req.body.username});
        if(doesExist){
            return res.redirect('/auth/login')
        }
        const salt = await bcrypt.genSalt(parseInt(process.env.SALTNUM));
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;

        const newUser = await User.create(req.body);
        return res.redirect('/auth/login')
    }
    catch(err) {
        console.log(err);
        req.error = err;
        return res.send(err);
    }
})
module.exports = router;