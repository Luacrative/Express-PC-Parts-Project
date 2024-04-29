const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
    name: {required: true, type: String},
    description: String
});

componentSchema.virtual("editUrl").get(function() {
    return "/components/create/" + this._id;
});

componentSchema.virtual("deleteUrl").get(function() {
    return "/components/delete/" + this._id;
});

module.exports = mongoose.model("Component", componentSchema);