var https = require('https');
var opts = {
	key : fs.readFileSync('./key.pem'),
	cert : fs.readFileSync('./key-cert.pem')
};
https.createServer(opts, function(req,res){
	res.writeHead('Content-Type','html/text');
	res.writeHead(200);
	res.write('Hello HTTPS');
}).listen(3000);