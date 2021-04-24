var express = require('express');
const railway_controlers= require('../controllers/railway');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET home page. */
router.get('/', railway_controlers.railway_view_all_Page );
/* GET detail railway page */
router.get('/detail', railway_controlers.railway_view_one_Page);
/* GET create railway page */
router.get('/create', secured,railway_controlers.railway_create_Page);
/* GET create update page */
router.get('/update', secured,railway_controlers.railway_update_Page);
/* GET create railway page */
router.get('/delete', secured,railway_controlers.railway_delete_Page)

module.exports = router;