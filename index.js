var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

var db;
var app = express();
var hello;
fs.readFile("./Website/cover.html",'utf-8',function(err,data){
	hello = data;
});
app.use(express.static('Website'));
app.get('/',function(req,res){
    res.send(hello);
  });
app.get('/api/jobs/:title', function(req, res) {
	console.log(req.params.title);
	db.collection('jobs').find({title: req.params.title}).toArray(function(err, results) {
    	res.send(results);
    })
});

app.get('/create/', function(req, res) {
	var j1 = ({
		title: "Job 1",
		location: "India",
		description: "Good game, well played. That is if it works.",
		contactemail: "ggwp@google.com",
		pay: "1000",
		company: "Google"
	});
	db.collection('jobs').save(j1, (err, result) => {
		if (err) return console.log(err);
		res.send("Added");
	});
})
MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
	if (err) return console.log(err);
	db = database
	app.listen(3001, () => {
    	console.log('listening on 3001')
	})
});
