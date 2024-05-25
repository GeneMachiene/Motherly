const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.json({
    message: "Welcome to Motherly!",
  });
});

module.exports = router;
