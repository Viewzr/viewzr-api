'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideoSchema = {
  _id                     : {type : String, default : uuid.v1},
  creatorId               : {type : String, default : uuid.v1},
  uploadDate              : {type : Date, default : Date.now},
  lastUpdated             : {type : Date, default : Date.now},
  videoTitle              : {type : String},
  videoCategory           : {type : String},
  videoGenres             : {type : String},
  videoType               : {type : String},
  videoDescription        : {type : String},
  videoLocation           : {type : String},
  videoImageLocation      : {type : String},
  videoThumbnailLocation  : {type : String},
  isFeatured              : {type : Boolean, default : false},
  isPicked                : {type : Boolean, default : false},
  numberViews             : {type : Number, default : 0},
  videoLength             : {type : Number},
  rating                  : {type : Number, default : 5},
  videoCredits            : {type : Schema.Types.Credits}
};


module.exports = VideoSchema;
