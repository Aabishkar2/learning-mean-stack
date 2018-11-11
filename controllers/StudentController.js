
var db = require('../dbconnection.js');

exports.addlist = function(req, res) {
        qry = "INSERT INTO students (name, gender, dob) VALUES ('sdasda', 'male', '12-12-1999')";
        db.query(qry, function (err, result) {
       if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
       res.redirect('/');
     });
}

exports.dynamicadd =  function(req, res){
    var name = req.body.name;
    var dob = req.body.dob;
    var gender = req.body.gender;
    var values = [name, gender, dob];
    console.log(values);
    var sql = "INSERT INTO students (name, gender, dob) VALUES ?";
    db.query(sql, [values], function (err, result) {
       if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
     });
    res.redirect('/');
}
