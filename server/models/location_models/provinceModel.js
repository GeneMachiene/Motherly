const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const provinceSchema = new Schema({
  name: { type: String, required: true },
  region: { type: Schema.ObjectId, ref: "region", required: true }
});

// static create method
provinceSchema.statics.add = async function(province) {
  const provinceOutput = await this.create(province);

  return provinceOutput;
}

module.exports = mongoose.model('province', provinceSchema);