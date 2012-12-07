var http = require("http");

http.createServer(function(req, res){
	console.log(req);
	res.writeHead(200, {"content-type": "text/html"} );

	res.end("get it" + req.url + req.httpVersion);

}).listen(3000, "127.0.0.1");
	// res.writeHead(200, {"Content-Type" : "text/html"});