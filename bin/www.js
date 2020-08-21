

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var config = require('../config/config');
var routes = require('../routes/routes');


var db;

// loading all collections from mongo DB
const loadModels=require('../Connector/Models/index');

app.use(bodyparser.json());
app.set('port', config.port);

app.use(cors());

app.all('/*', function (req, res, next) {

    res.header("Allow-Control-Allow-Order", "*");
    res.header("Allow-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Allow-Control-Allow-Headers", "Content-type,X-Acces-Token,X-Key");

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }

});

// app.use('/', require('../routes/routes'));
//Initiallize Route
routes.initialize(app);


app.use(function (req, res, next) {
    res.status(404).json({
        status: "Page Not Found,Sorry..."
    }).end();
});



//database connection
mongoose.connect(config.mongo.url, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = database;
    console.log("database connection done...!");

});


app.listen(app.get('port'), function () {
    console.log('Express Server Listing on port ::: 8000');
});