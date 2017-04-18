var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tasks');
var Schema = mongoose.Schema;
var Tasks = new Schema({
	project : String,
	description : String
});
mongoose.model('Task',Tasks);
var Task = mongoose.model('Task');
var task = new Task();
//insert
/*
task.project = 'Bikeshed';
task.description = 'Paint the bikeshed red.';
task.save(function(err){
	if (err) throw err;
	console.log("Task Saved");
});
*/
//Update
/*
Task.update({_id : '58f58f78de91b118182951a9'},
	{description:'Paint the bikeshed Green.'},
	{multi:false},
	function(err,rows_updated){
		if (err) throw err;
		console.log('Updated...');
	});
*/
//Delete
Task.findById('58f58f78de91b118182951a9',function(err,task){
	if (err) throw err;
	task.remove();
	console.log("Successfull Delete")
});
//Showing
/*
Task.find({'project':'Bikeshed'},function(err,tasks){
	for (var i = 0; i < tasks.length;i++){
		console.log('ID = '+tasks[i]._id);
		console.log(tasks[i].description);
	}
});
*/