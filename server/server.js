var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var db = require('./modules/db');
var index = require('./modules/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 4242));

app.use('/', index);

app.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});

module.exports = app;
