/* //read file stream 
var fs = require('fs');
var data = '';
//create a readable stream 
var readerStream = fs.createReadStream('file/'+'example1.txt');
//set the encoding to be utf 8
readerStream.setEncoding('UTF8');
//handle stream event --> data,end,error
readerStream.on('data',function(yow){
	data += yow;
});
readerStream.on('end',function(){
	console.log(data);
});
readerStream.on('error',function(err){
	console.log(err);
});
console.log('program ended');
console.log(__dirname);
*/
/* //write stream
var fs = require('fs');
var data = 'simple is easy learning';
//create a writeable stream
var writeStream = fs.createWriteStream('file'+'/'+'example1'+'.txt');
//write the data to stream with encoding to be the utf8
writeStream.write(data,'UTF8');
//mark the end file
writeStream.end();
//handle stream events > finish and error
writeStream.on('finish',function(){
	console.log("Write Complete");
});
writeStream.on('error',function(err){
	console.log(err.stack);
});
console.log('program ended');
*/
/* //piping
var fs = require('fs');
//create a readable stream 
var readerStream = fs.createReadStream('file'+'/'+'input'+'.txt');
//create a writable stream
var writeStream = fs.createWriteStream('file'+'/'+'output'+'.txt');
//pipe the read and write operations
//read input.txt and write data to output.txt
readerStream.pipe(writeStream);
console.log("successfull");
*/
var fs = require('fs');
var zlib = require('zlib');
/* //compress
fs.createReadStream('file'+'/'+'input'+'.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('file'+'/'+'input.zip'));
console.log("file compressed");
*/
fs.createReadStream('file'+'/'+'input'+'.zip').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('file'+'/'+'hasil_unzip'+'.txt'));
console.log('complete unzip');