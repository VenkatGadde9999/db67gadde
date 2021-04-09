var railway = require('../models/railway');
// List of all railways
exports.railway_list =async function(req, res) {
    try{
        therailways = await railway.find();
        res.send(therailways);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
};
// for a specific railway.
exports.railway_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: railway detail: ' + req.params.id);
};
// Handle railway create on POST.
exports.railway_create_post =async function(req, res) {
    console.log(req.body)
    let document = new railway();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"railwaytype":"goat", "cost":12, "size":"large"}
    document.city = req.body.city;
    document.destination = req.body.destination;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    
};
// Handle railway delete form on DELETE.
exports.railway_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: railway delete DELETE ' + req.params.id);
};
// Handle railway update form on PUT.
exports.railway_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: railway update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.railway_view_all_Page = async function(req, res) {
    try{
    therailways = await railway.find();
    res.render('railway', { title: 'railway Search Results', results: therailways });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };