'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Creator = {
  creatorImageUrl  : {type : String},
  creatorName      : {type : String},
  creatorPlaceId   : {type : String},
  creatorPlaceName : {type : String},
  creatorPlaceLat  : {type : Number}.
  creatorPlaceLng  : {type : Number},
  creatorBio       : {type : String},
  webUrl           : {type : String},
  twitterUrl       : {type : String},
  facebookUrl      : {type : String},
  videos           : {type : Array}
};

module.exports = Creator;
