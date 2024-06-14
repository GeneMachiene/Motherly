const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const regionSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
});

module.exports = mongoose.model("Region", regionSchema);
