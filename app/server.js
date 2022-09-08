<<<<<<< HEAD
let express = require('express');
let path = require('path');
let fs = require('fs');
let MongoClient = require('mongodb').MongoClient;
let bodyParser = require('body-parser');
let app = express();
=======
var express = require('express');
var path = require('path');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();
>>>>>>> 93e34c3f8e0ef949dc9ea625415990b3976fff4c

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get('/profile-picture', function (req, res) {
<<<<<<< HEAD
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
=======
  var img = fs.readFileSync('/home/app/images/profile-1.jpg');
>>>>>>> 93e34c3f8e0ef949dc9ea625415990b3976fff4c
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

<<<<<<< HEAD
// use when starting application locally
let mongoUrlLocal = "mongodb://admin:password@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "my-db";

app.post('/update-profile', function (req, res) {
  let userObj = req.body;

  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);
    userObj['userid'] = 1;

    let myquery = { userid: 1 };
    let newvalues = { $set: userObj };

=======
app.post('/update-profile', function (req, res) {
  var userObj = req.body;

  MongoClient.connect("mongodb://admin:password@mongodb", function (err, client) {
    if (err) throw err;

    var db = client.db('my-db');
    userObj['userid'] = 1;
    
    var myquery = { userid: 1 };
    var newvalues = { $set: userObj };
    
>>>>>>> 93e34c3f8e0ef949dc9ea625415990b3976fff4c
    db.collection("users").updateOne(myquery, newvalues, {upsert: true}, function(err, res) {
      if (err) throw err;
      client.close();
    });

  });
  // Send response
  res.send(userObj);
});

app.get('/get-profile', function (req, res) {
<<<<<<< HEAD
  let response = {};
  // Connect to the db
  MongoClient.connect(mongoUrlLocal, mongoClientOptions, function (err, client) {
    if (err) throw err;

    let db = client.db(databaseName);

    let myquery = { userid: 1 };

=======
  var response = {};
  // Connect to the db
  MongoClient.connect("mongodb://admin:password@mongodb", function (err, client) {
    if (err) throw err;

    var db = client.db('my-db');

    var myquery = { userid: 1 };
    
>>>>>>> 93e34c3f8e0ef949dc9ea625415990b3976fff4c
    db.collection("users").findOne(myquery, function (err, result) {
      if (err) throw err;
      response = result;
      client.close();
<<<<<<< HEAD

=======
      
>>>>>>> 93e34c3f8e0ef949dc9ea625415990b3976fff4c
      // Send response
      res.send(response ? response : {});
    });
  });
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
