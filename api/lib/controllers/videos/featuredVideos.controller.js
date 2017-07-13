var mongoose = require('mongoose');
var Video = mongoose.model('Video');

function getFeaturedVideos(req, res, next) {
    var query = {
      featured: 1
    }

    return Video.find(query);
}


function postFeaturedVideo(req, res, next) {

}

function removeFeaturedVideo(req, res, next) {

}

function putFeaturedVideo(req, res, next) {

}
