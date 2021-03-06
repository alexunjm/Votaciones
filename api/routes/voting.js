'use strict'

var express = require('express');

var VotingController = require('../controllers/voting');
var md_auth = require('../middlewares/authentication');

var api = express.Router();

api.post('/vote', md_auth.ensureAuth, VotingController.submitVote);
api.post('/results', md_auth.ensureAuth, VotingController.results);
api.post('/elections', md_auth.ensureAuth, VotingController.elections);
api.post('/categories', md_auth.ensureAuth, VotingController.categories);


module.exports = api;