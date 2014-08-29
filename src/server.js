var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/')));

app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('Listening on port', port);
