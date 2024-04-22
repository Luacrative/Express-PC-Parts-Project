const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Components page");
});

router.get("/create", (req, res, next) => {
    res.send("Create component");
});

module.exports = router;