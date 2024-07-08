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
    patient: {
      type: String,
      required: true,
      enum: ["Mother", "Child", "Partner"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

appointmentSchema.statics.add = async function (appointment) {
  const userExists = await mongoose
    .model("User")
    .findOne({ email: appointment.user_id })
    .exec();
  if (!userExists) {
    throw Error("User with provided ID does not exist.");
  }
  appointment.user_id = userExists._id;

  this.create(appointment);
};

appointmentSchema.statics.delete = async function (id) {
  const result = await this.findByIdAndDelete(id).exec();
  if (!result) {
    throw new Error("Appointment with provided ID does not exist");
  }
};

module.exports = mongoose.model("Appointment", appointmentSchema);
