const mongoose = require("mongoose");

const partSchema = new mongoose.Schema({
    name: {required: true, type: String},
    price: {required: true, type: Number},
    stock: Number,
    description: String,
    component: [{type: Schema.ObjectId, ref: "Component"}]
});

partSchema.virtual("url").get(() => {
    return "/parts/" + this._id;
});

module.exports = mongoose.model("Part", partSchema);