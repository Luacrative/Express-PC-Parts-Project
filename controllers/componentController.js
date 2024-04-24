
const componentModel = require("../models/component");

module.exports.index = (req, res, next) => {
    res.render("components");
};

module.exports.create = (req, res, next) => {
    res.send("Create component");
};