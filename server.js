var express = require('express');
var logger = require('morgan');
var test = require('./api/lib/routes/test/test.routes')

app = express();
port = process.env.PORT || 9991;

app.listen(port);

app.use('/', test);

console.log('API Started on: ' + port);
