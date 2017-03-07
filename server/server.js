var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/whatever');

var db = mongoose.connection;
var Schema = mongoose.Schema;


//these two are redundant... 
//but they are nice because they report errors and say we are connected, respectively
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
	console.log('we are connected')
})


var scapeSchema = new Schema(
	{
		// author: String,
		title: String,
		skyUrl: String,
		landUrl: String,
	}
);

var Scape = mongoose.model('Scape', scapeSchema);

app.use(express.static(__dirname));
app.use(bodyParser.json());


/*

app.get('/todos', function(req, res) {

	Todo.find(function (err, todo) {
	if (err) console.error(err);
	res.send(todo);
	res.end();

	});
});

app.post('/todos', function(req, res) {

	Todo.create(req.body, function(err) {
	if (err) {}
	console.log('we posted it!')
	res.end();

	});
});


*/

app.listen(8000, console.log('listening on port 8000'));








