const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const barangaySchema = new Schema({
  name: { type: String, required: true },
  province: { type: Schema.ObjectId, ref: "city", required: true }
});

// static create method
barangaySchema.statics.add = async function(barangay) {
  const barangayOutput = await this.create(barangay);

  return barangayOutput;
}

module.exports = mongoose.model('barangay', barangaySchema);