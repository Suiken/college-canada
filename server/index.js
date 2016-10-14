const http = require('http');
const url = require('url');
const querystring = require('querystring');
const express = require('express');


const app = express();

var users = require('./users');
var partners = require('./partners');

const hostname = '127.0.0.1';
const port = 3000;

app.get('/user/show', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
	users.findAll().then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.get('/user/show/:id', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	users.findById(req.params.id).then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
