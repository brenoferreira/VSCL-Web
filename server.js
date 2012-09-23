var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('hello world');
});

port = process.env.PORT || 8080;
app.listen(port);

console.log('listening at http://localhost:' + port);