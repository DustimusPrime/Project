const libRoutes = require('./library_routes');
const collectRoutes = require('./collect_routes');

module.exports = function(app, db) {
	libRoutes(app, db);
	collectRoutes(app, db);
	//other route groupes will go here later
}