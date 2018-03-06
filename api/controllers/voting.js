'use strict'

/* var path = require('path'); */
var moment = require('moment');
const async = require('async');
/* var mongoosePaginate = require('mongoose-pagination'); */

var Vote = require('../models/vote');

var submitVote = (req, res) => {
	var params = req.body;
	/* console.log(params); */

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
	async.waterfall([
		(cb) => {
			Vote.aggregate([{
				$group: {
					_id: '$elected.name'
				}
			}, {
				$unwind: "$_id"
			}, ], cb);
		}, 
		(data, cb) => {
			async.mapSeries(data, (category, cbMap) => {
				Vote.aggregate([{
					$unwind: "$elected"
				}, {
					$group: {
						_id: '$elected.number',
						total_votos: { $sum: { $cond: [{ $eq: ['$elected.name', category._id] }, 1, 0] } }
					}
				}], (error, result) => {
					cbMap(null, {
						name: category._id,
						result: result.map(dato => {
							return {
								number: dato._id,
								quantity: dato.total_votos
							};
						})
					});
				});
			}, cb);
		}
	], (error, data) => {
		if(error) console.log(error);
		return res.status(200).send({ status: 'ok', message: 'Resumen de resultados', data, error });
	});
};

module.exports = {
	submitVote,
	results
}