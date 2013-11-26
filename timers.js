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

var timers = [
	{"id":1,"name":"Giftys Graduation","time":1432458000},
	{"id":2,"name":"Christmas","time":1387951200}
];

Timer.find(function(err,resultset) {
	
	timers = timers.concat(resultset);
	console.log(timers);
});
exports.getAllTimers = function() {
   return timers;
}
exports.getTimer = function(id) {
   for(var i=0; i < timers.length; i++) {
      if(timers[i].id == id) return timers[i];
   }
}
exports.addTimer = function(timerObj) {
	var fluffy = new Timer(timerObj)
	fluffy.save(function (err, fluffy) {
	}); 
	timers.push(timerObj);
}