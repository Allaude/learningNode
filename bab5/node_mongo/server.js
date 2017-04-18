var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1',27017,{});
var client = new mongodb.Db('mydatabase',server,{w:1});
var ObjectId = require('mongodb').ObjectID;
client.open(function(err){
	if (err) throw err;
	client.collection('test_insert',function(err,collection){
		/*
		if (err) throw err;
		collection.insert(
		{
			"title" : "I Like success",
			"body"	: "It is quite good"
		},
		{safe:true},
		function(err,documents){
			if (err) throw err;
			console.log("Successfull Inserted");
		});
		*/
		var _id = ObjectId('58f5833db3765d17507f1860');
		//collection.update(
		//	{_id:_id},{$set:{"title":"I Must be Success"}},{safe:true},function(err){if (err) throw err; console.log("Successfull Updated")});
		//collection.find({"title":"I Must be Success"}).toArray(function(err,result){if (err) throw err; console.log(result)});
		collection.remove({_id:_id},{safe:true},function(err){if (err) throw err;console.log("Successfull Delete");})
	});
});