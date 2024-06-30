const express = require("express");
const router = express.Router();
const appointment_controller = require("../controllers/appointmentController");

router.get("/", appointment_controller.appointment_list);

router.post("/create", appointment_controller.appointment_create);

router.delete("/delete/:id", appointment_controller.appointment_delete);

module.exports = router;
