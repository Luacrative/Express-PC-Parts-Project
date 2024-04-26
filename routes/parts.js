const express = require("express");
const router = express.Router();

const partsController = require("../controllers/partsController");

router.get("/", partsController.index);

router.get("/create", (req, res, next) => {
    res.send("Create part");
});

module.exports = router;