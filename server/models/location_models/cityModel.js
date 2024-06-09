const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: { type: String, required: true },
  province: { type: Schema.ObjectId, ref: "province", required: true }
});

// static create method
citySchema.statics.add = async function(city) {
  const cityOutput = await this.create(city);

  return cityOutput;
}

module.exports = mongoose.model('city', citySchema);