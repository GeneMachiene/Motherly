const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    datetime_of_appointment: { type: Date, required: true },
    purpose: { type: String, required: true, minlength: 1, maxlength: 1000 },
    status: {
      type: String,
      enum: ["Pending", "Finished", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
