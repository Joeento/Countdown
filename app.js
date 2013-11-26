var express = require('express');
var app = express();
 
var hbs = require('hbs');
var timerContainer = require("./timers");
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());
 
app.get('/countdown', function(req, res) {
   res.render('index',{"timers": timerContainer.getAllTimers()});
});
app.get('/countdown/add', function(req, res) {
   res.render('add');
});
 
app.get('/countdown/timer/:id', function(req, res) {
   var timer = timerContainer.getTimer(req.params.id);
   res.render('timer',{"id": req.params.id, "timer":timer});
});
app.post('/countdown/data/add', function(req, res) {
   var date = req.body.date.split("/");
   var time = req.body.time.split(/[\s:]+/);   
   date[0]=date[0]-1;
   if (time[2]=="PM") {
   	time[0]=parseInt(time[0])+12;
   }
   var d = new Date(date[2], date[0], date[1], time[0], time[1], 0, 0); 
   console.log(date);
   console.log(time);
   console.log(d.toString()+"")
   res.redirect('/countdown/timer/1');
});
app.listen(8080);
