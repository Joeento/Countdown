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
 
app.get('/countdown/timer/:id', function(req, res) {
   var timer = timerContainer.getTimer(req.params.id);
   res.render('timer',{"id": req.params.id, "timer":timer});
});
app.listen(8080);
