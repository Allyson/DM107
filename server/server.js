var express = require("express");
var bodyParser = require('body-parser');

//Configure
var app = express();
app.use(bodyParser.json());
app.use(express.static('server/public'));

app.get('/', function(req, res) {
	res.redirect('index.html');
});

//REST-API
app.use('/api/order', require('./app/RestAPI.js'));

var server = app.listen(8080, function() {
	console.log("Server running at http://localhost:8080");
});
