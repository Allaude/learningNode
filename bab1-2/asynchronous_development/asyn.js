function asynFunction(callback){
	setTimeout(callback,200);
}
var color = 'blue';

(function(color){
	asynFunction(function(){
		console.log('the color is '+color);
	})
})(color);

color = 'green';