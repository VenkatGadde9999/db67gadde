var express = require('express');
const railway_controlers= require('../controllers/railway');
var router = express.Router();

/* GET home page. */
router.get('/', railway_controlers.railway_view_all_Page );
/* GET detail railway page */
router.get('/detail', railway_controlers.railway_view_one_Page);
/* GET create railway page */
router.get('/create', railway_controlers.railway_create_Page);
/* GET create update page */
router.get('/update', railway_controlers.railway_update_Page);
/* GET create railway page */
router.get('/delete', railway_controlers.railway_delete_Page)

module.exports = router;