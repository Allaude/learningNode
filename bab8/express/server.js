var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.end('Hello from Express');
});

app.listen(3000);