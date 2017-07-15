var mongoose = require('mongoose');

function getStaffPickedVideos(model, query, options, body, req) {
    var query = {
      isPicked: 1
    }
    return model.find(query);
}


function postStaffPickedVideo(model) {
  var query = {
    {
      id : id
    },
    { $set :
      {
        isPicked : 1
      }
    }
  }

  return model.update(query)
}

function removeFeaturedVideo(req, res, next) {

}

function putFeaturedVideo(req, res, next) {

}
