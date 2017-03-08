var Q = require('q');
var Scape = require('./scapeModel.js');

// var createOne = Q.nbind(Scape.create, Scape);
var retrieveAll = Q.nbind(Scape.find, Scape);


module.exports = {

	postOne: function(req, res) {

		console.log('HERES JONNY------- ', req.body)
		Scape.create(req.body, function(err) {
		if (err) { console.log('Error from postOne -------- ', err)}
		else { console.log('we posted it!') }
		res.end();

		});
	},

	getAll: function(req, res) {

		retrieveAll({})
		.then(function(scapes) {
			console.log("Scapes table entire content ----- ", scapes)
			res.send(scapes);
			res.end();
		})
		.catch(function(err) {
			console.log("An error from scapeHandler's getAll --------- ", err);
		})

	}
	
};

