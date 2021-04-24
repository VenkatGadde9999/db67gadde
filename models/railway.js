const mongoose = require("mongoose")
const railwaySchema = mongoose.Schema({
    city: String,
    destination: {
        type :String,
        required : [true,"The destination is required"]
    } ,
    cost: {
        type: Number,
        min : [1000,"the minimun cost of ticket "],
        max : [10000,"the maximum cost of ticket"]
    }
})
module.exports = mongoose.model("railway", railwaySchema)