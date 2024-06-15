const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
});

regionSchema.statics.update = async function (id, name) {
  const result = await this.findByIdAndUpdate(id, { name }).exec();
  if (!result) {
    throw new Error("Region with provided ID does not exist.");
  }
};

module.exports = mongoose.model("Region", regionSchema);
