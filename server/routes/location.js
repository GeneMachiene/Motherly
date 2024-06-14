const express = require("express");
const router = express.Router();
const location_controller = require("../controllers/locationController");

router.get("/", location_controller.location_list);

router.post("/region/create", location_controller.region_create);

router.post("/province/create", location_controller.province_create);

router.post("/city/create", location_controller.city_create);

router.post("/barangay/create", location_controller.barangay_create);

module.exports = router;
