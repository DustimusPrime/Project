module.exports = function(app, db){

const imdb = require('imdb-api');
	
	app.post('/collect', (req, res) => {
		const newMovieID = { text: req.body.id };

		let movie;
		imdb.getById('newMovieID', {apiKey: '1fdc329a'}).then(console.log);

	});
};