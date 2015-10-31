var express = require("express");
var bodyParser = require('body-parser');
var db = require('./app/DataBase');

//Configure
var app = express();
app.use(bodyParser.json());
app.use('/',express.static('server/public/'));
app.get('/', function(req, res) {
	res.redirect('index.html');
});

//REST-API
app.use('/api', require('./app/RestAPI.js'));

var server = app.listen(8085, function() {
	console.log("Server running at http://localhost:8085");
});

//INIT_DATABASE
db.init_database();
