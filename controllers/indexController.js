const componentModel = require("../models/component");
const partModel = require("../models/part");

module.exports = async (req, res, next) => {
    const components = await componentModel.find();

    const data = [];
    for (const component of components) {
        const parts = await partModel.find({
            component: component.id
        });

        data.push({component, parts})
    }

    res.render("index", {data});
};