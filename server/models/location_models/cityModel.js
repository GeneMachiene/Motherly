const mongoose = require("mongoose");

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
  const provinceExists = await mongoose
    .model("Province")
    .findById(city.province)
    .exec();
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

  this.create(city);
};

citySchema.pre("findOneAndDelete", async function (next) {
  const cityId = this.getQuery()._id;
  try {
    const city = await this.model.findOne({ _id: cityId });
    if (!city) {
      throw new Error("City with provided ID does not exist.");
    }

    await mongoose.model("Barangay").deleteMany({ city: cityId });
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("City", citySchema);
