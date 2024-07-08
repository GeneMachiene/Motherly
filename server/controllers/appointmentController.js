const { validationResult } = require("express-validator");
const Appointment = require("../models/appointmentModel");
const appointmentValidator = require("../validators/appointmentValidator");

const appointment_list = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: "Error fetching appointments" });
  }
};

const appointment_create = [
  appointmentValidator.validateAndSanitizeAppointment(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      await Appointment.add(req.body);
      return res
        .status(200)
        .json({ message: "Appointment added successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
];

const appointment_delete = async (req, res) => {
  try {
    await Appointment.delete(req.params.id);
    return res
      .status(200)
      .json({ message: "Appointment deleted successfully." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  appointment_list,
  appointment_create,
  appointment_delete,
};
