const partModel = require("../models/part");
const componentModel = require("../models/component")

module.exports.index = async (req, res, next) => { 
    const parts = await partModel.find();
    res.render("parts", {parts});
};

module.exports.detail = async (req, res, next) => { 
    const part = await partModel.findById(req.params.id).populate("component").exec();
    res.render("part_detail", {part});
};

module.exports.create = async (req, res, next) => { 
    const components = await componentModel.find();
    res.render("parts_form", {components});
};

module.exports.createPost = async (req, res, next) => { 
    const part = new partModel({  
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock || 0,
        price: req.body.price || 0,
        component: req.body.component
    });

    await part.save();

    res.redirect("/parts");
};

module.exports.create