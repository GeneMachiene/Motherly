const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  name: { type: String, required: true }
});

// static create method
regionSchema.statics.add = async function(region) {
  const regionOutput = await this.create(region);

  return regionOutput;
}

module.exports = mongoose.model('region', regionSchema);