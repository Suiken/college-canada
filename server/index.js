const http = require('http');
const url = require('url');
const querystring = require('querystring');
const express = require('express');


const app = express();

var users = require('./users');
var partners = require('./partners');

const hostname = 'localhost';
const port = 3000;

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

/***************** USERS *****************/
app.get('/users/show', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
	users.findAll().then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.get('/users/show/:id', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	users.findById(req.params.id).then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.post('/users/add/:firstName/:lastName/:gender/:address/:city/:province/:postalCode/:country/:birthday', function(req, res) {
	users.create(req.params.firstName, req.params.lastName, req.params.gender, 
		req.params.address, req.params.city, req.params.province, req.params.postalCode, req.params.country, req.params.birthday);
});

app.post('/users/add/:firstName/:lastName/:gender/:address/:city/:postalCode/:country/:birthday', function(req, res) {
	users.create(req.params.firstName, req.params.lastName, req.params.gender, 
		req.params.address, req.params.city, null, req.params.postalCode, req.params.country, req.params.birthday);
});

/***************** PARTNERS *****************/
app.get('/partners/show', function(req, res) {
	console.log('show');
    res.setHeader('Content-Type', 'application/json');
	partners.findAll().then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.get('/partners/show/:id', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	partners.findById(req.params.id).then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.post('/partners/add/:name/:address/:city/:province/:postalCode/:country', function(req, res) {
	partners.create(req.params.name, req.params.address, req.params.city, req.params.province, req.params.postalCode, req.params.country);
});

app.post('/partners/add/:name/:address/:city/:postalCode/:country', function(req, res) {
	partners.create(req.params.name, req.params.address, req.params.city, null, req.params.postalCode, req.params.country);
});




app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
