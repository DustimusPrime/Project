module.exports = function(app, db){

	var ObjectID = require('mongodb').ObjectID;

	app.get('/library/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id' : new ObjectID(id) };
		db.collection('library').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occurred'});
			} else {
				res.send(item);
			}
		});
	});

	app.delete('/library/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id' : new ObjectID(id)};
		db.collection('library').remove(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occurred'});
			} else {
				res.send(item);
			}
		});
	});

	app.put('/library/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const movie = { text: req.body.body, title: req.body.title };
		db.collection('library').update(details, movie, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred'});
			} else {
				res.send(movie);
			}
		});
	});

	app.post('/library', (req, res) => {
		const movie = { text: req.body.body, title: req.body.title };
		db.collection('library').insert(movie, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
};