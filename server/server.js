var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/whatever');

var db = mongoose.connection;
var Schema = mongoose.Schema;


//might want to abstract away from server.js


//these two are redundant... 
//but they are nice because they report errors and say we are connected, respectively

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
	console.log('we are connected')
})


app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());



// app.get('/api/getAll', function(req, res) {

// 	Todo.find(function (err, todo) {
// 	if (err) console.error(err);
// 	res.send(todo);
// 	res.end();

// 	});
// });





let postOne = function(req, res) {

	console.log('HERES JONNY-------', req.body)
	// Scape.create(req.body, function(err) {
	// if (err) {}
	// console.log('we posted it!')
	// res.end();

	};
// });

app.post('/api/addOne', postOne);

app.listen(8000, console.log('listening on port 8000'));








