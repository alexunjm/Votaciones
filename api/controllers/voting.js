'use strict'

/* var path = require('path'); */
var moment = require('moment');
const async = require('async');

var Vote = require('../models/vote');
var Election = require('../models/election');
var Category = require('../models/categorie');

var submitVote = (req, res) => {
	var params = req.body;

	if (!params[0].name && !params[0].vote) return res.status(500).send({ status: 'error', message: 'No has enviado un voto válido'})

	var vote = new Vote();
	vote.emmiter_user_id = req.user.sub;
	vote.created_at = moment().unix();
	vote.elected = [];
	params.forEach(aVote => {
		vote.elected.push({ name: aVote.name, number: Number(aVote.number) });
	});

	vote.save((err, voteSubmitted) => {
		if (err) return res.status(200).send({ status: 'error', message: 'Error al recibir el voto' })

		if (!voteSubmitted) {
			return res.status(404).send({ status: 'error', message: 'No se pudo realizar el voto' });
		}
		return res.status(200).send({ status: 'ok', message: 'Tu voto ha sido registrado', vote: voteSubmitted });
	});

};

var results = (req, res) => {
	var params = req.body;

	if (!params.election) return res.status(500).send({ status: 'error', message: 'No has enviado un parámetro válido' })
	var categoryF = [];
	async.waterfall([
		(cb) => {
			Election.findById(params.election, function (err, found) {
				cb(null, found['categories']);
			});
		},
		(data, cb) => {
			async.mapSeries(data, (category, cbMap) => {
				Category.findById(category, function (err, found) {
					categoryF.push(found);
					cbMap(null, found['name']);
				});
			}, cb);
		},
		(data, cb) => {
			Vote.aggregate([{
				$group: {
					_id: '$elected.name'
				}
			}, {
				$unwind: "$_id"
			}, {
				$match: {
					_id: { $in: data }
				}
			}], cb);
		},
		(data, cb) => {
			async.mapSeries(data, (category, cbMap) => {
				Vote.aggregate([{
					$unwind: "$elected"
				}, {
					$group: {
						_id: '$elected.number',
						total_votos: { $sum: { $cond: [{ $eq: ['$elected.name', category._id] }, 1, 0] } },
					}
				}], (error, result) => {
					cbMap(null, {
						name: category._id,
						result: result.map(dato => {
							return {
								number: dato._id,
								quantity: dato.total_votos,
							};
						})
					});
				});
			}, cb);
		}
	], (error, data) => {
		if(error) console.log(error);
		return res.status(200).send({ status: 'ok', message: 'Resumen de resultados', data, categories: categoryF, error });
	});
};

var elections = (req, res) => {
	async.waterfall([
		(cb) => {
			Election.find({}).exec( (err, found) => {
				cb(null, found);
			});
		},
		(data, cb) => {
			cb(null, data);/* 
			async.mapSeries(data, (election, cbMap) => {
				
				Category.findById(category, function (err, found) {
					categoryF.push(found);
					cbMap(null, found['name']);
				});
			}, cb); */
		}
	], (error, data) => {
		return res.status(200).send({ status: 'ok', message: 'Elecciones activas', data, error });
	});
}

var categories = (req, res) => {
	var params = req.body;

	if (!params.election) return res.status(500).send({ status: 'error', message: 'No has enviado un parámetro válido' })
	

	async.waterfall([
		(cb) => {
			Election.findById(params.election, (err, found) => {
				cb(null, found);
			});
		},
		(data, cb) => {
			async.mapSeries(data.categories, (category, cbMap) => {
				
				Category.findById(category, function (err, found) {
					cbMap(null, found);
				});
			}, cb);
		}
	], (error, data) => {
		return res.status(200).send({ status: 'ok', message: 'Elecciones activas', data, error });
	});
}

module.exports = {
	submitVote,
	results,
	elections,
	categories
}