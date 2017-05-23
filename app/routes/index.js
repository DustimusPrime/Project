const libRoutes = require('./library_routes');

module.exports = function(app, db) {
	libRoutes(app, db);
	//other route groupes will go here later
}