var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('layouts/main')
});

router.get('/nepal', function(req, res){
   res.send('GET route on things.');
});

router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

//export this router to use in our index.js
module.exports = router;
