var buf = new Buffer(256);
var len = buf.write("I am learning javascript")
var buf_read = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf_read[i] = i + 97;
}
console.log(buf_read.toString('ascii'));
console.log(buf_read.toString('utf8',0,10));