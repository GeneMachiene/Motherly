const mongoose = require('mongoose');
const User = require("../models/userModel");

const Schema = mongoose.Schema;

const childSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },
  image: { type: String },
  name: { type: String, required: true  },
  birthdate: {type: Date, required: true },
  age: {type: Number},
  sex: { type: String, required: true, enum: ["Male", "Female"] },
});

// static create method
childSchema.statics.add = async function(child) {

  // check if user exists
  const user = await User.findOne({ email: child.user_id });
  if (!user) {
    throw Error("User not found!");
  }

  if (!child.name || !child.sex || !child.birthdate) {
    throw Error('All fields must be filled');
  }

  child.user_id = user._id;
  const childOutput = await this.create(child);

  return childOutput;
}

module.exports = mongoose.model('Child', childSchema);