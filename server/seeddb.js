let Scape = require('./scapeModel.js')
let mongoose = require('mongoose');
let db = mongoose.connection;

let seedScapes = [
	{
		title: 'Thats pretty neat',
		skyUrl: 'http://eskipaper.com/images/stunning-landscape-wallpaper-2.jpg',
		landUrl: 'https://s-media-cache-ak0.pinimg.com/originals/e3/ac/e8/e3ace8faa23c2ca35c60aefea05a91ca.jpg'
	},
	{
		title: 'FILL27',
		skyUrl: 'https://pbs.twimg.com/profile_images/2968304317/652317f26fb6506d89938d1104bd68b1.jpeg',
		landUrl: 'https://pbs.twimg.com/profile_images/2968304317/652317f26fb6506d89938d1104bd68b1.jpeg'
	}
]


module.exports = function() {

	// drop and rebuild my db with entries from 'seedScapes'
	db.collections['scapes'].drop()
	for (let entry of seedScapes) Scape.create(entry);
	
}