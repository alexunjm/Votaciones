'use strict'

var express = require('express');

var VotingController = require('../controllers/voting');
var md_auth = require('../middlewares/authentication');

var api = express.Router();

api.get('/testVoting', VotingController.testVoting);


module.exports = api;