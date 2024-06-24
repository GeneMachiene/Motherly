const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const regionSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
  },
  { timestamps: true }
);

regionSchema.statics.update = async function (id, name) {
  const result = await this.findByIdAndUpdate(id, { name }).exec();
  if (!result) {
    throw new Error("Region with provided ID does not exist.");
  }
};

regionSchema.pre("findOneAndDelete", async function (next) {
  const regionId = this.getQuery()._id;
  try {
    const region = await this.model.findOne({ _id: regionId });
    if (!region) {
      throw new Error("Region with provided ID does not exist.");
    }

    await mongoose.model("Province").deleteMany({ region: regionId });
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("Region", regionSchema);
