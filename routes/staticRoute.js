const express = require('express');
const Url = require('../model/urlSchema.js')
const auth = require('../middleware/auth.js')


const router = express.Router();

//display front page
router.get('/',auth, async (req, res) => {
    const allUrl = await Url.find({createdBy:req.user._id})
    return res.render("home", { url: allUrl })
})

//display register page
router.get('/register', (req, res) => {
    res.render("register")
})

//display login page
router.get('/login', (req, res) => {
    res.render("login")
})

module.exports = router;

