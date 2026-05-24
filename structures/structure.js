const mongoose = require('mongoose');

const urlStructure = mongoose.Schema({
	longUrl : {
		type : String,
		required : true
	},
	shortId : {
		type : String,
		unique : true,
		required : true
	},
	clicks : {
		type : Number,
		required : true,
		default : 0
	},
	createOn : {
		type : Date,
		default : Date.now
	}
});

module.exports = mongoose.model('Url', urlStructure);
