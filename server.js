var express = require("express");
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/client'));

app.use('/static', express.static(__dirname + '/client'));

app.get ('/', function (req,res) {
  res.sendfile('index.html');
});

app.listen(3000);

console.log("Running at Port 3000");
