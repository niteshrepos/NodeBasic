var connect = require("connect");

var app = connect();

app.use(connect.bodyParser());
app.use(connect.static("public"));
app.use(function(req, res){
	if(req.url === "/process"){
		console.log("into process");
		console.log(req.body.first_name);
		res.end(req.body.first_name);
	}
	
});
app.listen(3000);


// var connect = require("connect");
// var app = connect();

// app.use(connect.bodyParser());
// app.use(connect.static("public"));
// app.use(function(req, res){
// 	console.log(req.body);
// })
// app.listen(3000);