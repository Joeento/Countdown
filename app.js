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
 
app.listen(8080);
