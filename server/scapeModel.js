var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let scapeSchema = new Schema(
	{
		// author: String,
		title: String,
		skyUrl: String,
		landUrl: String
	}
);

module.exports = mongoose.model('Scape', scapeSchema);