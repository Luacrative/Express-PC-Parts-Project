
const componentModel = require("../models/component");
    
module.exports.index = async (req, res, next) => {
    const components = await componentModel.find();
    res.render("components", {components});
};

module.exports.detail = async (req, res, next) => { 
    const component = await componentModel.findById(req.params.id);
    res.render("component_detail", {component});
};

module.exports.create = (req, res, next) => {
    res.render("components_form");
};

module.exports.createPost = async (req, res, next) => {    
    const component = new componentModel({  
        name: req.body.name,
        description: req.body.description
    });

    await component.save();

    res.redirect("/components");
};