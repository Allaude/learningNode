var flow = require('nimble');

flow.series([
	function(callback){
		setTimeout(function(){
			console.log(' I Executed first');
			callback();
		},1000);
	},function(callback){
		setTimeout(function(){
			console.log('I Excuted Second');
			callback();
		},500);
	},function(callback){
		setTimeout(function(){
			console.log('I Executed the last');
			callback();
		},100);
	}])
