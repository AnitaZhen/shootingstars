var express = require('express');

const path = require('path')// node.js native path module to join directories containing scripts and style

var app = express();

app.use(express.static(__dirname + "/views"));

//routes
app.set('view engine', 'ejs')// set ejs as templating engine for the express app
app.get('/index', function(req, res){
  res.render('index');
})
app.get('/', function(req, res){
  res.render('index');
})

app.listen(process.env.PORT || 3000, () => {

	console.log('Server Running')
})

module.exports.app = app;