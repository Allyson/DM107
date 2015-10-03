var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {//req = request res = response
  	console.log("URL:",req.url);

	fs.readFile("request.log",'utf8',function(err,data){
		if (err) throw err;
		var appendedData = data + '\n' + req.url
		fs.writeFile("request.log",appendedData,function(err){
			if (err) throw err;
		});
	});


	res.writeHead(200, {'Content-Type': 'text/plain'});
 	res.end('Hello World\n');
});


server.listen(3000,function() {
	console.log('Server running at http://127.0.0.1:3000/');
});

