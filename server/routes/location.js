const express = require("express");
const router = express.Router();
const location_controller = require("../controllers/locationController");

router.get("/", location_controller.location_list);

router.post("/region/create", location_controller.region_create);

module.exports = router;
