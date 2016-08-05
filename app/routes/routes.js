// Exported routes to Node
// They respect a last declared hiearchy, so the ones defined at
// the bottom may override the ones at the top.
module.exports = function(app) {
	
	// Test route to with request and response
	app.get('/test', function(req, res) {
		res.writeHead(200);
		res.write('<h1>I\'m HTML!</h1>');
		res.end();
	});

	app.get('*', function(req, res) {
		res.sendfile('public/views/index.html');
	});
}