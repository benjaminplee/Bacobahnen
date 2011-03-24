var
	path = require('path'),
	http = require('http'),
	paperboy = require('paperboy'),
	git = require('nodegit'),
	PORT = 3000,
	WEBROOT = path.join(path.dirname(__filename), 'web');

var gitSHA;
git.repo('.git', function(err, repo){
	if(err) { gitSHA = err; }
	repo.branch('master', function(err, branch){
		if (err) { gitSHA = err; }
		console.log(branch.history.length);
		branch.history.each(function(i, commit){
			console.log(i + '  ' + commit.sha);
		})
	});
});
console.log(gitSHA);

http.createServer(function(req, res) {
	var ip = req.connection.remoteAddress;
	
	paperboy
		.deliver(WEBROOT, req, res)
		.addHeader('Expires', 300)
		.addHeader('X-GitSHA', gitSHA)
		.before(function() {
			console.log('Received Request');
		})
		.after(function(statCode) {
			log(statCode, req.url, ip);
		})
		.error(function(statCode, msg) {
			res.writeHead(statCode, {'Content-Type': 'text/plain'});
			res.end("Error " + statCode)
			log(statCode, req.url, ip, msg)
		})
		.otherwise(function(err) {
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end("Error 404: File not found");
			log(404, req.url, ip, err);
		});
}).listen(PORT);

function log(statCode, url, ip, err) {
	var logStr = statCode + ' _ ' + url + ' - ' + ip;
	if (err)
		logStr += ' - ' + err;
	console.log(logStr);
}