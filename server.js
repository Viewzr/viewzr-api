var express = require('express');
var logger = require('morgan');

app = express();
port = process.env.PORT || 9991;

app.listen(port);

console.log('API Started on: ' + port);
