'use strict'

var express = require('express');

var VotingController = require('../controllers/voting');
var md_auth = require('../middlewares/authentication');

var api = express.Router();

api.post('/vote', md_auth.ensureAuth, VotingController.submitVote);


module.exports = api;