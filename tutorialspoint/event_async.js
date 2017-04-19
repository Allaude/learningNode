var fs = require('fs');

fs.readFile('./example.txt',function(err,data){
	if (err) throw err;
	console.log(data.toString());
});
console.log('aplication ended');