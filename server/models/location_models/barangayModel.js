const mongoose = require("mongoose");
const { isExistentId } = require("../validators/userValidator");

const Schema = mongoose.Schema;

const barangaySchema = new Schema({
  name: { type: String, required: true },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    validate: {
      validator: isExistentId,
      message: "City with provided ID does not exist.",
    },
  },
});

// static create method
barangaySchema.statics.add = async function (barangay) {
  const barangayOutput = await this.create(barangay);

  return barangayOutput;
};

module.exports = mongoose.model("Barangay", barangaySchema);
