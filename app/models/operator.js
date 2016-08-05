var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var OperatorSchema   = new Schema({
	value: String
});

module.exports = mongoose.model('Operator', OperatorSchema);