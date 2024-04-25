const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
    name: {required: true, type: String},
    description: String
});

componentSchema.virtual("url").get(function() {
    return "/components/" + this._id;
});

module.exports = mongoose.model("Component", componentSchema);