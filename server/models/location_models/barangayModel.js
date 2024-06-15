const mongoose = require("mongoose");
const City = require("./cityModel");

const Schema = mongoose.Schema;

const barangaySchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
});

barangaySchema.statics.add = async function (barangay) {
  const cityExists = await City.findById(barangay.city).exec();
  if (!cityExists) {
    throw Error("City with provided ID does not exist.");
  }

  const barangayExists = await this.findOne({
    name: barangay.name,
    region: barangay.region,
  }).exec();
  if (barangayExists) {
    throw Error("Barangay with provided name and region already exists.");
  }

  await this.create(barangay);
};

barangaySchema.statics.delete = async function (id) {
  const result = await this.findByIdAndDelete(id).exec();
  if (!result) {
    throw new Error("Barangay with provided ID does not exist.");
  }
};

module.exports = mongoose.model("Barangay", barangaySchema);
