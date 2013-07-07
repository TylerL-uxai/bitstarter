var express = require('express');
fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var k = fs.ReadFileSync('index.html','utf8');
    response.end( k );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
