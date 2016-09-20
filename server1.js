var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Express works!');
});



var port = 8080; 
app.listen(8080, function () {
  console.log(`Listening on port ${port}!`);
  console.log(`Press ctrl-c to stop listening!`);
});
