var express = require('express');
var app = express();
var faker = require('faker');

app.get('/', function (req, res) {
  res.send('<p>Reto Backend 1</p><p><a href="/link-1">Link 1</a></p><p><a href="/link-2">Link 2</a></p>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})