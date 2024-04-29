const express = require("express");
const router = express.Router();

const partsController = require("../controllers/partsController");

router.get("/", partsController.index);
router.get("/create/:id?", partsController.create);
router.post("/create/:id?", partsController.createPost);
router.get("/delete/:id", partsController.delete);

module.exports = router;