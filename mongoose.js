var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/timers');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
	console.log("connection openend");
});

var timerSchema = mongoose.Schema({
	name: String,
	time: Number
});

var Timer = mongoose.model('timer', timerSchema);



/*
var fluffy = new Timer({ name: 'fluffy', time: 1387951200 })
fluffy.save(function (err, fluffy) {
	if (err) {
	  	console.log("Save failed")
	}else {
		console.log("WIN")
	}
}); 
*/
Timer.find(function(err,resultset) {
	console.log("success"+resultset);
});