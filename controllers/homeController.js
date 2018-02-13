var express = require('express');
var router = express.Router();

// Home page after login
router.get('/asbs-inquiry/home', function(req, res) {
    res.send('Home Page Test');
});

router.get('/asbs-inquiry/home2', function(req, res) {
    res.send('Home Page Test 2');
});

module.exports = router