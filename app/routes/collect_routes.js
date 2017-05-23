module.exports = function(app, db){

const imdb = require('imdb-api');

	app.post('/collect', (req, res) => {
		const newMovieId = { text: req.body.movieId };

		let movie;
		imdb.getById(newMovieId.text, {apiKey: '1fdc329a'}).then(console.log);

    db.collection('library').insert(movie, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
	});
};