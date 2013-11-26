var express = require('express');
var app = express();
 
var hbs = require('hbs');
var timerContainer = require("./timers");
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
//app.use(express.bodyParser());

app.use(express.json());
app.use(express.urlencoded());

app.get('/countdown', function(req, res) {
   res.render('index',{"timers": timerContainer.getAllTimers(), "title":"Home", "showBackButon":false});
});
app.get('/countdown/add', function(req, res) {
   res.render('add',{"title":"Add New Timer", "showBackButon":true});
});
 
app.get('/countdown/timer/:id', function(req, res) {
   var timer = timerContainer.getTimer(req.params.id);
   res.render('timer',{"id": req.params.id, "timer":timer, "title":timer.name, "showBackButon":true});
});

app.post('/countdown/data/add', function(req, res) {
   var date = req.body.date.split("/");
   var time = req.body.time.split(/[\s:]+/);   
   date[0]=date[0]-1;
   if (time[2]=="PM") {
   	time[0]=parseInt(time[0])+12;
   }
   var d = new Date(date[2], date[0], date[1], time[0], time[1], 0, 0); 

   //temporary code to get highest ID in array-will be removed when array is replaced with DB
   var timers = timerContainer.getAllTimers();
   var nextID=timers[timers.length-1].id+1

   timerContainer.addTimer({"id":nextID,"name":req.body.name,"time":(d.getTime()/1000)});
   res.redirect('/countdown/timer/'+nextID);
});
app.listen(8080);
