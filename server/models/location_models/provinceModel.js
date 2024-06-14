const mongoose = require("mongoose");
const Region = require("./regionModel");

const Schema = mongoose.Schema;

const provinceSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  region: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
    required: true,
  },
});

provinceSchema.statics.add = async function (province) {
  const regionExists = await Region.findById(province.region).exec();
  if (!regionExists) {
    throw Error("Region with provided ID does not exist.");
  }

  const provinceExists = await this.findOne({
    name: province.name,
    region: province.region,
  }).exec();
  if (provinceExists) {
    throw Error("Province with provided name and region already exists.");
  }

  await this.create(province);
};

module.exports = mongoose.model("Province", provinceSchema);
