const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Parts page");
});

router.get("/create", (req, res, next) => {
    res.send("Create part");
});

module.exports = router;