
const componentModel = require("../models/component");
    
module.exports.index = async (req, res, next) => {
    const components = await componentModel.find();
    res.render("components", {components});
};

module.exports.create = (req, res, next) => {
    res.send("Create component");
};