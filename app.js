const express = require('express');
const mysql = require('mysql');
const config=require('./dbdetails.js');
// const bodyParser = require('body-parser');
// var users = require('./routes/routeusers');

var app=express();
// app.use(bodyParser.json());
console.log('Welcome ... !');
// var routeusers=require('./routes/routeusers');
// app.use('/users',users);
// module.exports = app;
var router=express.Router();

console.log('Selecting row ... !');

let connection = mysql.createConnection(config);
connection.connect(function(err){
  if(err){
    return console.error('error:'+err.message);
  }
  console.log('Connected to database successfully');
});

/* GET users listing. */
app.get('/users', function(req, res, next) {
 	connection.query('SELECT * from empdetails', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
  //   results.forEach((row)=>{
  //   console.log(`${row.empname} is from ${row.addr}`);
  // });
    // return console.log('results are',results);
	});
});
app.listen(4000,()=>{
  console.log(`Server is above to start at port number 4000`);
});
