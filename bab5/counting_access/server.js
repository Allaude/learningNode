var http = require('http');
var count = 0;

http.createServer(function(req,res){
	count++;
	res.write('I Have been accessed at '+count+' times');
	res.end();
}).listen(3000);