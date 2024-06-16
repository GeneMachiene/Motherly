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

citySchema.statics.update = async function (id, name) {
  const result = await this.findByIdAndUpdate(id, { name }).exec();
  if (!result) {
    throw new Error("City with provided ID does not exist.");
  }
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

citySchema.pre("deleteMany", async function (next) {
  try {
    const cities = await this.model.find(this.getFilter());
    const cityIds = cities.map((city) => city._id);

    await mongoose.model("Barangay").deleteMany({ city: { $in: cityIds } });
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("City", citySchema);
