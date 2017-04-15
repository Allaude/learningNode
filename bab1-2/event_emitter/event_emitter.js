var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
channel.on('error',function(err){
	console.log('Error = '+err.message);
});
channel.on('join',function(id,client){
	this.clients[id] = client;
	this.subscriptions[id] = function(senderId,message){
		if (id != senderId){
			this.clients[id].write(message);
		}
	}
	this.on('broadcast',this.subscriptions[id]);
});
channel.on('leave',function(id){
	channel.removeListener('boradcast',this.subscriptions[id]);
	channel.emit('broadcast',id,id + "has been leave chat \n");
});
channel.on('shutdown',function(){
	channel.emit('boradcast','','chat has been shutdown\n');
	channel.removeAllListeners('broadcast');
});
var server = net.createServer(function(client){
	var id = client.remoteAddress + ':' + client.remotePort;
	client.on('connect',function(){
		channel.emit('join',id,client);
	});
	client.on('data',function(data){
		data = data.toString();
		if (data == 'shutdown\r\n'){
			channel.emit('shutdown');
		}
		channel.emit('broadcast',id,data);
	});
	client.on('close',function(){
		channel.emit('leave',id);
	});
});
server.listen(8888);