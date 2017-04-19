//import event module
var events = require('events');
// create event emitter object
var eventEmitter = new events.EventEmitter();
//create an event handler as follows
var connectHandler = function connected(){
	console.log('connection succesful');
	//fore the data data_received event
	eventEmitter.emit('data_received');
}
//bind the connection event with tha handler
eventEmitter.on('connection',connectHandler);
//bind the data_received event with anonymous function
eventEmitter.on('data_received',function(){
	console.log('data received successfull');
});
//fire the connection event
eventEmitter.emit('connection');
console.log('program ended');