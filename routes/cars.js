const express = require("express");
const carsController = require("../controllers/carsController");
const router = express.Router();

router.get("/", carsController.index);

router.post("/", carsController.create);

router.get("/:id", carsController.show);

router.put("/:id", carsController.update);

router.delete("/:id", carsController.delete);

module.exports = router;
