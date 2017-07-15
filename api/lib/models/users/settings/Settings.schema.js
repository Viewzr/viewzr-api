'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Settings = {
  email : {type : Schema.Types.EmailSettings}
};

module.exports = Settings;
