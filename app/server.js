var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', function (req, res) {
  var webp = fs.readFileSync('dog.webp');
  res.writeHead(200, {'Content-type': 'image/jpg'});
  res.end(webp, 'binary');
});

app.listen(3000, function () {
  console.log('app listening on port 3000');
});