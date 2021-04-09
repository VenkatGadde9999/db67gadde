var express = require('express');
const railway_controlers= require('../controllers/railway');
var router = express.Router();

/* GET home page. */
router.get('/', railway_controlers.railway_view_all_Page );


module.exports = router;