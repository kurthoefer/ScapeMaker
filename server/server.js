let express = require('express');
let app = express();

//mongoose to kick up mongo
let mongoose = require('mongoose');

//db seeding function here:
let dbSeeder = require('./seeddb.js');


//midleware for parsing request objects
let bodyParser = require('body-parser');


let scapeHandler = require('./scapeHandler.js')



//kick off mongo
mongoose.connect('mongodb://localhost/whatever');
let db = mongoose.connection;


//these two are redundant... 
//but they are nice because they report errors and say we are connected, respectively

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
	console.log('we are connected to the db')
})


dbSeeder();
// let seedScapes = [
// 	{
// 		title: 'FILL1',
// 		skyUrl: 'https://pbs.twimg.com/profile_images/2968304317/652317f26fb6506d89938d1104bd68b1.jpeg',
// 		landUrl: 'https://pbs.twimg.com/profile_images/2968304317/652317f26fb6506d89938d1104bd68b1.jpeg'
// 	},
// 	{
// 		title: 'FILL2',
// 		skyUrl: 'https://pbs.twimg.com/profile_images/2968304317/652317f26fb6506d89938d1104bd68b1.jpeg',
// 		landUrl: 'https://pbs.twimg.com/profile_images/2968304317/652317f26fb6506d89938d1104bd68b1.jpeg'
// 	}
// ]

// // drop and rebuild my db with entries from 'seedScapes'
// db.collections['scapes'].drop()
// for (let entry of seedScapes) Scape.create(entry);


app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());



// requestHandler.postOne
app.post('/api/addOne', scapeHandler.postOne);

// requestHandler.getAll
app.get('/api/getAll', scapeHandler.getAll);





app.listen(8000, console.log('listening on port 8000'));





//to start the db run this in terminal:
//$ mongod --dbpath ~/mongo
