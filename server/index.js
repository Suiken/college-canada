const http = require('http');
const url = require('url');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	var params = querystring.parse(url.parse(req.url).query);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	if('prenom'in params && 'nom' in params){
		res.end('Hello World ' + params['prenom'] + ' ' + params['nom'] + '\n');
	}else {
        res.end('Vous devez bien avoir un pr&eacute;nom et un nom, non ?');
    }
    res.end();
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
