'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Person = Schema({
	name: String,
	lastname: String,
	image: String,
	number: Number,
	color: String
});

var CategorieSchema = Schema({
	name: String,
	candidates: [Person]
});

module.exports = mongoose.model('Categorie', CategorieSchema);