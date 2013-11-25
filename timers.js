var timers = [
	{"id":1,"name":"Giftys Graduation","time":1432458000},
	{"id":2,"name":"Christmas","time":1387951200}
];
exports.getAllTimers = function() {
   return timers;
}
exports.getTimer = function(id) {
   for(var i=0; i < timers.length; i++) {
      if(timers[i].id == id) return timers[i];
   }
}
