var http = require('http');

var server = http.createServer(function (req, res) {//req = request res = response
  	console.log("URL:",req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
 	res.end('Hello World\n');
});


server.listen(3000,function() {
	console.log('Server running at http://127.0.0.1:3000/');
});

