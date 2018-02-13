var express = require('express');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var bodyParser = require('body-parser');
var controllers = require('./controllers');

// ===== Handlebars template engine =====
var hbs = require('express-handlebars');

// ===== Set express js =====
var app = express();

// ===== set parser functions for parsing application/json
app.use(bodyParser.json());

// ===== create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }));

// ===== set up template engine =====
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

// ===== static file =====
app.use(express.static('./public'));

// ===== Express validation =====
app.use(expressValidator());

// ===== Express Session =====
app.use(expressSession({secret: 'asbs'}));

// ===== Connect all our routes to our application =====
app.use('/', controllers);

// ================= listen to port ===================
app.listen(3000, function(){
    console.log('Server is running on port 3000...');
});