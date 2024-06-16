const express = require("express");
const router = express.Router();
const location_controller = require("../controllers/locationController");

router.get("/", location_controller.location_list);

router.post("/region/create", location_controller.region_create);

router.put("/region/update/:id", location_controller.region_update);

router.delete("/region/delete/:id", location_controller.region_delete);

router.post("/province/create", location_controller.province_create);

router.put("/province/update/:id", location_controller.province_update);

router.delete("/province/delete/:id", location_controller.province_delete);

router.post("/city/create", location_controller.city_create);

router.put("/city/update/:id", location_controller.city_update);

router.delete("/city/delete/:id", location_controller.city_delete);

router.post("/barangay/create", location_controller.barangay_create);

router.delete("/barangay/delete/:id", location_controller.barangay_delete);

module.exports = router;
