var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var railway_controller = require('../controllers/railway');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// railway ROUTES ///
// POST request for creating a railway.
router.post('/resource/railways', railway_controller.railway_create_post);
// DELETE request to delete railway.
router.delete('/resource/railways/:id', railway_controller.railway_delete);
// PUT request to update railway.
router.put('/resource/railways/:id', railway_controller.railway_update_put);
// GET request for one railway.
router.get('/resource/railways/:id', railway_controller.railway_detail);
// GET request for list of all railway items.
router.get('/resource/railways', railway_controller.railway_list);
module.exports = router;