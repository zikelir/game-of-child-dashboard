var express = require("express");
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/client'));

app.use('/static', express.static(__dirname + '/client'));

app.get ('*', function (req,res) {
  res.sendfile('./client/index.html');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log("Running at Port 3030");
