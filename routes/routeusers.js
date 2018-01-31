var express=require('express');
var router=express.Router();
const mysql = require('mysql');
const config=require('./../dbdetails.js');
console.log('Selecting row ... !');

let connection = mysql.createConnection(config);
connection.connect(function(err){
  if(err){
    return console.error('error:'+err.message);
  }
  console.log('Connected to database successfully');
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
 	connection.query('SELECT * from employee', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
    // return console.log('results are',results);
	});
});

module.exports = router;
