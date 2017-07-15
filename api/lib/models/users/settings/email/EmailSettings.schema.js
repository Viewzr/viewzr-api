'use strict';
var mongoose = require('mongoose');

var EmailSettings = {
  onVideoApproved    : {type : Boolean},
  onMessageReceived  : {type : Boolean},
  newsletter         : {type : Boolean}
};

module.exports = EmailSettings;
