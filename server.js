var express = require('express');
var EventApi = require('./api/EventApi');
var app = express();

app.get('/', function (req, resp) {
    resp.send('hello world');
});

var api = new EventApi(app);
api.start()

port = process.env.PORT || 8080;
app.listen(port);

console.log('listening at http://localhost:' + port);