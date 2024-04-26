const partModel = require("../models/part");
const componentModel = require("../models/component")

module.exports.index = async (req, res, next) => { 
    const parts = await partModel.find();
    res.render("parts", {parts});
};