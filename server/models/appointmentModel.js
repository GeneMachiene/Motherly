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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

appointmentSchema.statics.delete = async function (id) {
  const result = await this.findByIdAndDelete(id).exec();
  if (!result) {
    throw new Error("Appointment with provided ID does not exist");
  }
};

module.exports = mongoose.model("Appointment", appointmentSchema);
