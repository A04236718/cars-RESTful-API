var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  let message = "Welcome to Express MVC";
  res.status(200).json({ message });
});

module.exports = router;
