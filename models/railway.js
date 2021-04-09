const mongoose = require("mongoose")
const railwaySchema = mongoose.Schema({
    city: String,
    destination: String,
    cost: Number
})
module.exports = mongoose.model("railway", railwaySchema)