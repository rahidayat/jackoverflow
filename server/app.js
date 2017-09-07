var express = require('express');
var app = express()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors')


// var articles = require('./routes/articlesRouter');

mongoose.connect('mongodb://localhost/db-qa');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

// app.use('/articles', articles);

app.listen(3000);

module.exports = app;
