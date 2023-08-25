var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
/*loactions page*/
router.get('/',ctrlLocations.homelist);
router.get('/location',ctrlLocations.locationInfo);
router.get('/location/review/new',ctrlLocations.addReview);

/*others page*/
router.get('/about',ctrlOthers.about);
module.exports = router;
