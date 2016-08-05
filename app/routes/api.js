"use strict";

// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
		Operator = require('../models/operator');

	// API routes /////////////////////////////

	// GET possible operations
	app.get('/operations', function(req, res) {
		Operator.find(function(err, operators) {
			if (err)
				res.send(err);
			res.json(operators);
		});
	});

	// POST a new operator
	app.post('/operator', function(req, res) {
	    var operator = new Operator();
	    operator.value = req.body.value;
	    operator.save(function(err) {
	        if (err)
	            res.send(err);
	        res.json({ message: 'Operator created!' });
	    });
	    
	});

	// DELETE a current operator
	app.delete('/operator/:operator_id', function(req, res) {
		Operator.remove({
			_id: req.params.operator_id
		}, function(err, operator) {
			if (err)
				res.send(err);
			res.json({ message: 'Successfully deleted' });
		});
	});

	// calculate and GET the result of an equation
	// can be modified in the future to accept other functions by parsing a for MATH functions.
	app.get('/calculate', function(req, res) {
		var val1 =parseFloat(req.query.val1, 10);
		var val2 =parseFloat(req.query.val2, 10);
		var op =req.query.op.charAt(0); //extra careful on eval due to security concern
		console.log("calculating:", val1, op, val2);
		var result =eval(val1+op+val2);
		console.log("result: ", result);
		res.json({ result: result });
	});
}