'use strict'

/* var path = require('path'); */
/* var fs = require('fs'); */
/* var mongoosePaginate = require('mongoose-pagination'); */

var user = require('../models/user');
/* var vote = require('../models/vote'); */

var testVoting = (req, res) => {
	res.status(200).send({ status: 'ok', message: 'todo bien' });
};

module.exports = {
	testVoting
}