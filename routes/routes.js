var express = require('express');
var router = express.Router();
var student_controller = require('../controllers/StudentController.js');
var db = require('../dbconnection.js');
require('../index.js');
router.get('/', function(req, res){
    res.render('layouts/main', {
        user : {name:"Aabishkar",age:"19"},
        default : {name:"[Your name goes here]", age:"[and age here]"}
    });
});

router.get('/nepal', function(req, res){
   res.send('GET route on things.');
});


 router.get('/india', student_controller.addlist);


 router.post('/student', student_controller.dynamicadd);

 
 router.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

//export this router to use in our index.js
module.exports = router;
