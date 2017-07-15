'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = {
  _id              : {type : String, default : uuid.v1},
  email            : {type : String},
  facebook         : {type : Schema.Types.Facebook},
  google           : {type : Schema.Types.Google},
  isCreator        : {type : Number},
  privilegeLevel   : {type : Number},
  creator          : {type : Schema.Types.Creator},
  password         : {type : String},
  icon             : {type : Schema.Types.Icon},
  loginTime        : {type : Date, default : Date.now},
  signupTime       : {type : Date, default : Date.now},
  loginFailures    : {type : Number, default : 0},
  lockedOutUntil   : {type : Date},
  settings         : {type : Schema.Types.Settings}
};

module.exports = UsersSchema;
