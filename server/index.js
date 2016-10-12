const http = require('http');
const url = require('url');
const querystring = require('querystring');
const express = require('express');


const app = express();

const postgresProperties = require('./postgres-properties');
var users = require('./users');
var partners = require('./partners');

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'application/json');
	
	postgresProperties.pool.connect(function(err, client, done) {
		queryResult = client.query('select * from users', [], function(err, result) {
			//call `done()` to release the client back to the pool 
			done();

			if(err) {
			  return console.error('error running query', err);
			}
			
			res.end(JSON.stringify(result.rows));
			//output: 1 
		});
	});
    //res.end(users.findAll());

});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
