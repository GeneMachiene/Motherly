const mongoose = require("mongoose");

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
  const regionExists = await mongoose
    .model("Region")
    .findById(province.region)
    .exec();
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

  this.create(province);
};

provinceSchema.pre("findOneAndDelete", async function (next) {
  const provinceId = this.getQuery()._id;
  try {
    const province = await this.model.findOne({ _id: provinceId });
    if (!province) {
      throw new Error("Province with provided ID does not exist.");
    }

    await mongoose.model("City").deleteMany({ province: provinceId });
    next();
  } catch (error) {
    next(error);
  }
});

provinceSchema.pre("deleteMany", async function (next) {
  try {
    const cities = await this.model.find(this.getFilter());
    const provinceIds = cities.map((province) => province._id);

    await mongoose.model("City").deleteMany({ province: { $in: provinceIds } });
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Province", provinceSchema);
