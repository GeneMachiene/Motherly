const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact_number: { type: String },
  personal_information: {
    name: {
      last_name: { type: String, required: true, maxlength: 100 },
      first_name: { type: String, required: true, maxlength: 100 },
      middle_name: { type: String, required: true, maxlength: 100 },
      suffix: { type: String, maxlength: 20 },
    },
    address: {
      region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: false },
      province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province', required: false },
      city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: false },
      district: { type: String, maxlength: 100 },
      barangay: { type: mongoose.Schema.Types.ObjectId, ref: 'Barangay', required: false },
      residence: { type: String, required: true, maxlength: 300 },
      street: { type: String, maxlength: 100 },
    },
    birthdate: { type: Date, required: true },
    age: { type: Number },
    marital_status: {
      type: String,
      enum: ["Single", "Married", "Widowed", "Legally Separated"],
      default: null,
    },
    sex: {
      type: String,
      enum: ["Male", "Female", "Prefer not to say", "Other"],
      default: null,
    },
    place_of_birth: { type: String, required: true, maxlength: 200 },
    contact_one: { type: String, maxlength: 50 },
    contact_two: { type: String, maxlength: 50 },
    messenger_name: { type: String, maxlength: 100 },
    religion: { type: String, maxlength: 50 },
    language_spoken: { type: String, maxlength: 50 },
    tin: { type: String, maxlength: 50 },
    gsis_or_sss: { type: String, maxlength: 50 },
  },
  family: {
    name_of_spouse: {
      last_name: { type: String, maxlength: 100 },
      first_name: { type: String, maxlength: 100 },
      middle_name: { type: String, maxlength: 100 },
      suffix: { type: String, maxlength: 20 },
    },
    name_of_father: {
      last_name: { type: String, maxlength: 100 },
      first_name: { type: String, maxlength: 100 },
      middle_name: { type: String, maxlength: 100 },
      suffix: { type: String, maxlength: 20 },
    },
    name_of_mother: {
      last_name: { type: String, maxlength: 100 },
      first_name: { type: String, maxlength: 100 },
      middle_name: { type: String, maxlength: 100 },
      suffix: { type: String, maxlength: 20 },
    },
  },
  education: {
    highest_educational_attainment: { type: String, maxlength: 50 },
    technical_skills: { type: String, maxlength: 400 },
  },
  economic_profile: {
    source_of_income_and_assistance: { type: String, maxlength: 200 },
    monthly_income: { type: Number },
  },
  health_profile: {
    medical_concern: { type: String, maxlength: 100 },
    dental_concern: { type: String, maxlength: 100 },
    social_or_emotional: { type: String, maxlength: 100 },
    health_problems_or_ailment: { type: String, maxlength: 100 },
    visual_or_hearing_condition: { type: String, maxlength: 100 },
    area_of_difficulty: { type: String, maxlength: 100 },
  },
  photo_references: {
    id: { type: String, maxlength: 100 },
    selfie: { type: String, maxlength: 100 },
  },
});

// static signup method
userSchema.statics.signup = async function (user) {
  const exists = await this.findOne({ email: user.email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  // Modify birthdate to store only year, month, and day without the timestamp
  user.personal_information.birthdate = new Date(
    user.personal_information.birthdate.toISOString().split("T")[0]
  );

  const userOutput = await this.create(user);

  return userOutput;
};

// static login method
userSchema.statics.login = async function (user) {
  if ((!user.email && !user.contact_number) || !user.password) {
    throw Error("All fields must be filled");
  }

  const userResult = await (user.email
    ? this.findOne({ email: user.email })
    : this.findOne({ contact_number: user.contact_number }));

  if (!userResult) {
    throw Error("Incorrect email or contact number");
  }

  const match = await bcrypt.compare(user.password, userResult.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return userResult;
};

module.exports = mongoose.model("User", userSchema);
