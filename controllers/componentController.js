
const componentModel = require("../models/component");
    
module.exports.index = async (req, res, next) => {
    const components = await componentModel.find();
    res.render("components", {components});
};

module.exports.create = async (req, res, next) => {
    const id = req.params.id;
    if (!id) { 
        res.render("components_form", {
            component: {},
            action: "",
            button: "Add"
        });

        return;
    } 
    
    const component = await componentModel.findById(id);
    res.render("components_form", {
        component,
        action: component.id,
        button: "Edit"
    }); 
};

module.exports.createPost = async (req, res, next) => {
    const id = req.params.id; 
    if (id)  
        await componentModel.findByIdAndUpdate(id, req.body);
    else 
        await (new componentModel(req.body)).save();

    res.redirect("/components");
};

module.exports.delete = async (req, res, next) => {
    const id = req.params.id; 
    await componentModel.findByIdAndDelete(id);
    
    res.redirect("/components");
};