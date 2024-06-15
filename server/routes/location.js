const express = require("express");
const router = express.Router();
const location_controller = require("../controllers/locationController");

router.get("/", location_controller.location_list);

router.post("/region/create", location_controller.region_create);

router.put("/region/update/:id", location_controller.region_update);

router.post("/province/create", location_controller.province_create);

router.post("/city/create", location_controller.city_create);

router.post("/barangay/create", location_controller.barangay_create);

router.delete("/barangay/delete/:id", location_controller.barangay_delete);

module.exports = router;
