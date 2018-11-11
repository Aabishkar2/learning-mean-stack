var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
require('./dbconnection.js'); 
var routes = require('./routes/routes.js');

/*For requesting form data body parser is needed */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static('public'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/', function(req, res, next){
    console.log("A request for things received at " + Date.now());
    next();
 });

app.use('/', routes);
// app.use('/nextroutes', routes2);

app.listen(3000);
