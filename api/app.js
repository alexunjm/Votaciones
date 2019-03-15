'use strict'

var express = require('express');
var bodyParser = require('body-parser'),
	cors = require('cors');

var app = express();

//cors
app.use(cors({
	origin: 'http://votacionesiep.tk',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

//cargar rutas
var user_router = require('./routes/user');
var voting_router = require('./routes/voting');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


//rutas
app.use('/api', user_router);
app.use('/api', voting_router);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
	if (req.method.toLowerCase() == 'post') {

		var err = new Error(`Path or Method Not Found: ${req.method} to ${req.protocol + '://' + req.get('host') + req.originalUrl}`);
		err.status = 404;
		next(err);
	} else {
		// const path = isProduction ? '/saas' : '/saasw'
		res.redirect('/democracia')
	}
});

//exportar
module.exports = app;