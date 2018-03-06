'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ElectionSchema = Schema({
	name: String,
	categories: [{ type: Schema.ObjectId, ref: 'Categorie' }]
});

module.exports = mongoose.model('Election', ElectionSchema);