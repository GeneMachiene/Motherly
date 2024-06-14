const express = require("express");
const router = express.Router();
const { region_list } = require("../controllers/locationController");

/* GET home page. */
router.get("/locations", region_list);

module.exports = router;
