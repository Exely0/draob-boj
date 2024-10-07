// routes/genericRoutes.js
const express = require("express");
const router = express.Router();
const GenericController = require("../controllers/genericControllers");

router.get("/:table", GenericController.getAll);
router.get("/:table/:id", GenericController.getById);
router.post("/:table", GenericController.create);
router.put("/:table/:id", GenericController.update);
router.delete("/:table/:id", GenericController.delete);

module.exports = router;
