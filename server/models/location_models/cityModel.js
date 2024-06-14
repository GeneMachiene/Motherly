const mongoose = require("mongoose");
const Province = require("./provinceModel");

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  province: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Province",
    required: true,
  },
});

citySchema.statics.add = async function (city) {
  const provinceExists = await Province.findById(city.province).exec();
  if (!provinceExists) {
    throw Error("Province with provided ID does not exist.");
  }

  const cityExists = await this.findOne({
    name: city.name,
    region: city.region,
  }).exec();
  if (cityExists) {
    throw Error("City with provided name and province already exists.");
  }

  await this.create(city);
};

module.exports = mongoose.model("City", citySchema);
