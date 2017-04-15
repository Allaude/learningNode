var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFilename = './rss_feeds.txt';

function checkforRSSfile(){
	fs.exists(configFilename,function(exists){
		if (!exists) return next(new Error('Error Missing RSS File '+configFilename));
		next(null,configFilename);
	});
}
function readRSSFile(configFilename){
	fs.readFile(configFilename,function(err,feedList){
		if (err) return next(err);
		feedList = 	feedList
					.toString()
					.replace(/^\s|\s+$/g, '')
					.split("\n");
		var random = Math.floor(Math.random() * feedList.length);
		next(null,feedList[random]);
	});
}
function downloadRSSFeed(feedUrl){
	request({uri:feedUrl},function(err,res,body){
		if (err) return next(err);
		if (res !== 200) return next(new Error('New Error Abnormal status code' + res))
			next(null,body);
	});
}
function parseRSSFeed(rss){
	var handler = new htmlparser.RssHandler();
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(rss);
	if (!handler.dom.items.length) return next(new Error('No RSS file item founde'));
	var item = handler.dom.items.shift();
	console.log(item.title);
	console.log(item.link);
}
var tasks = [checkforRSSfile,readRSSFile,downloadRSSFeed,parseRSSFeed];
function next(err,result){
	if (err) throw err;
	var currentTask = tasks.shift();
	if (currentTask){
		currentTask(result);
	}
}
next();