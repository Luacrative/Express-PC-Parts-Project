const express = require("express");
const router = express.Router();

const componentController = require("../controllers/componentController");

router.get("/", componentController.index);
router.get("/create/:id?", componentController.create);
router.post("/create/:id?", componentController.createPost);

module.exports = router;