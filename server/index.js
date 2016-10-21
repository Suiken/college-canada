const hostname = 'localhost';
const port = 3000;

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var userService = require('./service/user-service');
var partnerService = require('./service/partner-service');

const urlencodeParser = bodyParser.urlencoded({ extended: false });

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



/***************** USERS *****************/
app.get('/users/show', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
	userService.findAll().then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.get('/users/show/:id', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	userService.findById(req.params.id).then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.post('/users/add/:firstName/:lastName/:gender/:address/:city/:province/:postalCode/:country/:birthday', function(req, res) {
	userService.create(req.params.firstName, req.params.lastName, req.params.gender, 
		req.params.address, req.params.city, req.params.province, req.params.postalCode, req.params.country, req.params.birthday);
});

app.post('/users/add/:firstName/:lastName/:gender/:address/:city/:postalCode/:country/:birthday', function(req, res) {
	userService.create(req.params.firstName, req.params.lastName, req.params.gender, 
		req.params.address, req.params.city, null, req.params.postalCode, req.params.country, req.params.birthday);
});



/***************** PARTNERS *****************/
app.get('/partners/show', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
	partnerService.findAll().then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.get('/partners/show/:id', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	partnerService.findById(req.params.id).then(data => {
		res.end(JSON.stringify(data));
	}).catch(err => {
		res.end(JSON.stringify(err));
	});
});

app.post('/partners/add/:name/:address/:city/:province/:postalCode/:country', function(req, res) {
	partnerService.create(req.params.name, req.params.address, req.params.city, req.params.province, req.params.postalCode, req.params.country);
});

app.post('/partners/add', urlencodeParser, function(req, res) {
	partnerService.create(req.body.name, req.body.address, req.body.city, req.body.province, req.body.postalCode, req.body.country);
});


/****************** CONFIG ******************/
app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});