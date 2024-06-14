const mongoose = require("mongoose");
const { isExistentId } = require("../validators/userValidator");

const Schema = mongoose.Schema;

const provinceSchema = new Schema({
  name: { type: String, required: true },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
    validate: {
      validator: isExistentId,
      message: "Region with provided ID does not exist.",
    },
  },
});

// static create method
provinceSchema.statics.add = async function (province) {
  const provinceOutput = await this.create(province);

  return provinceOutput;
};

module.exports = mongoose.model("Province", provinceSchema);
