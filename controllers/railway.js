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
// for a specific Costume.
exports.railway_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await railway.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
        res.send(err);
        }
    
};
// Handle railway delete form on DELETE.
exports.railway_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: railway delete DELETE ' + req.params.id);
};
// Handle railway update form on PUT.
exports.railway_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await railway.findById( req.params.id)
        // Do updates of properties
        if(req.body.city) toUpdate.city = req.body.city;
        if(req.body.destination) toUpdate.destination = req.body.destination;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

   
// Handle a show one view with id specified by query
exports.railway_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await railway.findById(req.query.id)
        res.render('railwaydetail', {
            title: 'railway Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a railway.
// No body, no in path parameter, no query.
// Does not need to be async
exports.railway_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('railwaycreate', { title: 'Create railway'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a railway.
// query provides the id
exports.railway_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await railway.findById(req.query.id)
        res.render('railwayupdate', { title: 'Update railway Details', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle railway delete on DELETE.
exports.railway_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await railway.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a delete one view with id from query
exports.railway_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await railway.findById(req.query.id)
        res.render('railwaydelete', { title: 'railway Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};