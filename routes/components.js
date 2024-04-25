const express = require("express");
const router = express.Router();

const componentController = require("../controllers/componentController");

router.get("/", componentController.index);
router.get("/create", componentController.create);
router.post("/create", componentController.createForm);
router.get("/:name", componentController.detail);

module.exports = router;