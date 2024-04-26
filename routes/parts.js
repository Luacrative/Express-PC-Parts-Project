const express = require("express");
const router = express.Router();

const partsController = require("../controllers/partsController");

router.get("/", partsController.index);
router.get("/create", partsController.create);
router.post("/create", partsController.createPost);

module.exports = router;