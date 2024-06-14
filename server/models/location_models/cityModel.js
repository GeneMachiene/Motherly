const mongoose = require("mongoose");
const { isExistentId } = require("../validators/userValidator");

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: { type: String, required: true },
  province: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Province",
    validate: {
      validator: isExistentId,
      message: "Province with provided ID does not exist.",
    },
  },
});

// static create method
citySchema.statics.add = async function (city) {
  const cityOutput = await this.create(city);

  return cityOutput;
};

module.exports = mongoose.model("City", citySchema);
