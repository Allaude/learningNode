//asynchronous
var fs = require('fs');
fs.readFile('file'+'/'+'input'+'.txt',function(err,data){
	if (err) return err;
	console.log('asynchronous => '+data.toString()+'\n');
});
//synchronous
/*
var data_sync = fs.readFileSync('file'+'/'+'hasil_unzip'+'.doc');
console.log('synchronous => '+ data_sync);
*/

console.log("Going to open file");