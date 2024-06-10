const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const childSchema = new Schema({
  image: { type: String },
  name: { type: String, required: true  },
  relationship: { type: String, required: true, enum: ["Daughter", "Son", "Partner"] },
});

// static create method
childSchema.statics.add = async function(child) {

  if (!child.name || !child.relationship) {
    throw Error('All fields must be filled');
  }

  const childOutput = await this.create(child);

  return childOutput;
}

module.exports = mongoose.model('child', childSchema);