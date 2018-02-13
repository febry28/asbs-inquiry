// ============================================================================//
// | Index Controller
// | 
// ============================================================================//

var express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

var appName = 'asbs-inquiry';
var baseURL = '/nodeApps/asbs-inquiry';

var app = express();
var userModel = require('../models/userModel');

// ===== set parser functions for parsing application/json
//app.use(bodyParser.json());

// ===== create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.urlencoded({ extended: true }));

// Home Controller
//router.use('/', require('./homeController'));
//router.use('/', require('./financeController'));
//router.use('/', require('./salesController'));
//router.use('/', require('./accountingController'));

//router.use('/login', require('../models/userModel'));

// =================== Login Controller & Validation =========================//
router.get('/', function(req, res) {    
    res.redirect('/asbs-inquiry');
});

router.get('/asbs-inquiry', function(req, res){
    sess = req.session;

    if(sess.UserID){
        console.log('Session oke');
        res.sendFile(__dirname + '/views/home.html');
    }
    else {
        // console.log(__dirname);
        // console.log('No Session');
        res.sendFile('views/login.html', {root: baseURL}); 
    }       
});

router.post('/login/validate', urlencodedParser, function(req, res){

    if (!req.body) return res.sendStatus(400)

    //console.log(req.body);

    if (userModel.validate(req.body.UserID, req.body.UserPassword) === 'TRUE'){
        var obj = {
            flag: 'success',
            id: req.body.UserID,
            message: ''
        };
        console.log('Ok Validate');
        session = req.session;
        session.sessionID = 'sessionID';
        session.UserID = req.body.UserID;
        res.end(JSON.stringify(obj));
    } else {
        var obj = {
            flag: 'error',
            id: req.body.UserID,
            message: ''
        };
        //console.log('Error Validate');
        //console.log(JSON.stringify(obj));
        res.end(JSON.stringify(obj));
    }    

    //res.send('welcome, ' + req.body.UserID)

    //res.sendFile(__dirname + '/views/home.html');
});
// ==================================================================

// ===== Test Handlebars View =====
router.get('/hbs',function(req, res){
    var templateData = {
        title : 'Title',
        condition: 'false',
        annyArray: [1,2,3]
    };
    res.render('test', templateData);
});


module.exports = router;