var express = require('express');
let router = express.Router();

router.get("/test", respond);

function respond(app) {
  console.log("Response");
}

module.exports = router;
