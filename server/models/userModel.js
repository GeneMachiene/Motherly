const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact_number: { type: String },
  personal_information: {
    name: {
      last_name: { type: String, maxlength: 100, required: true },
      first_name: { type: String, maxlength: 100, required: true },
      middle_name: { type: String, maxlength: 100, required: true },
      suffix: { type: String, maxlength: 20 }
    },
    address: {
      region: { type: String, maxlength: 100 },
      province: { type: String, maxlength: 100 },
      city: { type: String, maxlength: 100 },
      district: { type: String, maxlength: 100 },
      barangay: { type: String, maxlength: 100 },
      residence: { type: String, maxlength: 300, required: true },
      street: { type: String, maxlength: 100 }
    },
    birthdate: { type: Date, required: true },
    age: { type: Number },
    marital_status: { type: String, enum: ["Single", "Married", "Widowed", "Legally Separated"] },
    sex: { type: String, enum: ["Male", "Female", "Prefer not to say", "Other"] },
    place_of_birth: { type: String, required: true, maxlength: 200 },
    contact_one: { type: String, maxlength: 50 },
    contact_two: { type: String, maxlength: 50 },
    messenger_name: { type: String, maxlength: 100 },
    religion: { type: String, maxlength: 50 },
    language_spoken: { type: String, maxlength: 50 },
    tin: { type: String, maxlength: 50 },
    gsis_or_sss: { type: String, maxlength: 50 }
  },
  family: {
    name_of_spouse: {
      last_name: { type: String, maxlength: 100 },
      first_name: { type: String, maxlength: 100 },
      middle_name: { type: String, maxlength: 100 },
      suffix: { type: String, maxlength: 20 }
    },
    name_of_father: {
      last_name: { type: String, maxlength: 100 },
      first_name: { type: String, maxlength: 100 },
      middle_name: { type: String, maxlength: 100 },
      suffix: { type: String, maxlength: 20 }
    },
    name_of_mother: {
      last_name: { type: String, maxlength: 100 },
      first_name: { type: String, maxlength: 100 },
      middle_name: { type: String, maxlength: 100 },
      suffix: { type: String, maxlength: 20 }
    }
  },
  education: {
    highest_educational_attainment: { type: String, maxlength: 50 },
    technical_skills: { type: String, maxlength: 400 }
  },
  economic_profile: {
    source_of_income_and_assistance: { type: String, maxlength: 200 },
    monthly_income: { type: Number }
  },
  health_profile: {
    medical_concern: { type: String, maxlength: 100 },
    dental_concern: { type: String, maxlength: 100 },
    social_or_emotional: { type: String, maxlength: 100 },
    health_problems_or_ailment: { type: String, maxlength: 100 },
    visual_or_hearing_condition: { type: String, maxlength: 100 },
    area_of_difficulty: { type: String, maxlength: 100 }
  }
});


// static signup method
userSchema.statics.signup = async function(email, password) {

  // validation
  if (!email || !password){
    throw Error('All fields must be filled');
  }
  if (!validator.isEmail(email)){
    throw Error('Email is not valid');
  }
  if (!validator.isStrongPassword(password)){
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne( {email} );

  if (exists) {
    throw Error('Email already in use');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash
  })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {
  if (!email || !password){
    throw Error('All fields must be filled');
  }

  const user = await this.findOne( {email} );

  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if(!match){
    throw Error('Incorrect password');
  }

  return user
}

module.exports = mongoose.model('user', userSchema);