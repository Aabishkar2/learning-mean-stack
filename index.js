var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var routes = require('./routes/routes.js');

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/', function(req, res, next){
    console.log("A request for things received at " + Date.now());
    next();
 });

app.use('/', routes);
app.listen(3000);
