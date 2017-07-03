let router = express.Router()
const controller = require('./userDashboard.controller')

// Gets the feature videos based on a query
router.get('/dashboard/featured/', controller.getFeaturedVideos)
