const partModel = require("../models/part");
const componentModel = require("../models/component")

module.exports.index = async (req, res, next) => { 
    const parts = await partModel.find();
    res.render("parts", {parts});
};

module.exports.create = async (req, res, next) => { 
    const components = await componentModel.find();

    const id = req.params.id; 
    if (!id) { 
        res.render("parts_form", {
            components,
            part: {component: {}},
            action: "",
            button: "Add"
        });

        return; 
    }

    const part = await partModel.findById(id)
        .populate("component")
        .exec(); 
    
    res.render("parts_form", {
        components,
        part,
        action: part.id,
        button: "Edit"
    });
};

module.exports.createPost = async (req, res, next) => {
    const id = req.params.id; 
    if (id) 
        await partModel.findByIdAndUpdate(id, req.body);
    else 
        await (new partModel(req.body)).save();

    res.redirect("/parts");
};

module.exports.delete = async (req, res, next) => { 
    const id = req.params.id; 
    await partModel.findByIdAndDelete(id); 

    res.redirect("/parts");
};

module.exports.create