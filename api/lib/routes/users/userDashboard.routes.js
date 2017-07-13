let router = express.Router()
const featuredController = require('lib/controllers/videos/featuredVideos.controller');
const recommendedController = require('lib/controllers/videos/recommendedVideos.controller');
const staffPickController = require('lib/controllers/videos/staffPickedVideos.controller');

// Gets the feature videos
router.get('/users/videos/featured/', controller.getFeaturedVideos);

// Gets the recommended videos
router.get('/users/videos/recommend/', controller.getRecommendedVideos);

// Gets the staff picked videos
router.get('/users/videos/staff/', controller.getStaffPickedVideos);
