const { body } = require("express-validator");

const validateAndSanitizeUser = () => {
  return [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("contact_number")
      .optional()
      .isMobilePhone()
      .withMessage("Invalid contact number"),
    body("personal_information.name.last_name")
      .isString()
      .withMessage("Last name must be a string"),
    body("personal_information.name.first_name")
      .isString()
      .withMessage("First name must be a string"),
    body("personal_information.name.middle_name")
      .isString()
      .withMessage("Middle name must be a string"),
    body("personal_information.name.suffix")
      .optional()
      .isString()
      .withMessage("Suffix must be a string"),
    body("personal_information.address.region")
      .optional()
      .isString()
      .withMessage("Region must be a string"),
    body("personal_information.address.province")
      .optional()
      .isString()
      .withMessage("Province must be a string"),
    body("personal_information.address.city")
      .optional()
      .isString()
      .withMessage("City must be a string"),
    body("personal_information.address.district")
      .optional()
      .isString()
      .withMessage("District must be a string"),
    body("personal_information.address.barangay")
      .optional()
      .isString()
      .withMessage("Barangay must be a string"),
    body("personal_information.address.residence")
      .isString()
      .withMessage("Residence must be a string"),
    body("personal_information.address.street")
      .optional()
      .isString()
      .withMessage("Street must be a string"),
    body("personal_information.birthdate")
      .isISO8601()
      .toDate()
      .withMessage("Invalid birthdate"),
    body("personal_information.age")
      .optional()
      .isInt()
      .withMessage("Age must be an integer"),
    body("personal_information.marital_status")
      .isIn(["Single", "Married", "Widowed", "Legally Separated"])
      .withMessage("Invalid marital status"),
    body("personal_information.sex")
      .isIn(["Male", "Female", "Prefer not to say", "Other"])
      .withMessage("Invalid sex"),
    body("personal_information.place_of_birth")
      .isString()
      .withMessage("Place of birth must be a string"),
    body("personal_information.contact_one")
      .optional()
      .isString()
      .withMessage("Contact one must be a string"),
    body("personal_information.contact_two")
      .optional()
      .isString()
      .withMessage("Contact two must be a string"),
    body("personal_information.messenger_name")
      .optional()
      .isString()
      .withMessage("Messenger name must be a string"),
    body("personal_information.religion")
      .optional()
      .isString()
      .withMessage("Religion must be a string"),
    body("personal_information.language_spoken")
      .optional()
      .isString()
      .withMessage("Language spoken must be a string"),
    body("personal_information.tin")
      .optional()
      .isString()
      .withMessage("TIN must be a string"),
    body("personal_information.gsis_or_sss")
      .optional()
      .isString()
      .withMessage("GSIS/SSS must be a string"),
    body("family.name_of_spouse.last_name")
      .optional()
      .isString()
      .withMessage("Spouse last name must be a string"),
    body("family.name_of_spouse.first_name")
      .optional()
      .isString()
      .withMessage("Spouse first name must be a string"),
    body("family.name_of_spouse.middle_name")
      .optional()
      .isString()
      .withMessage("Spouse middle name must be a string"),
    body("family.name_of_spouse.suffix")
      .optional()
      .isString()
      .withMessage("Spouse suffix must be a string"),
    body("family.name_of_father.last_name")
      .optional()
      .isString()
      .withMessage("Father last name must be a string"),
    body("family.name_of_father.first_name")
      .optional()
      .isString()
      .withMessage("Father first name must be a string"),
    body("family.name_of_father.middle_name")
      .optional()
      .isString()
      .withMessage("Father middle name must be a string"),
    body("family.name_of_father.suffix")
      .optional()
      .isString()
      .withMessage("Father suffix must be a string"),
    body("family.name_of_mother.last_name")
      .optional()
      .isString()
      .withMessage("Mother last name must be a string"),
    body("family.name_of_mother.first_name")
      .optional()
      .isString()
      .withMessage("Mother first name must be a string"),
    body("family.name_of_mother.middle_name")
      .optional()
      .isString()
      .withMessage("Mother middle name must be a string"),
    body("family.name_of_mother.suffix")
      .optional()
      .isString()
      .withMessage("Mother suffix must be a string"),
  ];
};

const isExistentId = async function (value) {
  if (!value) {
    return true;
  }

  try {
    const doc = await this.model(this.options.ref).findById(value);
    return !!doc;
  } catch (err) {
    return false;
  }
};

module.exports = {
  validateAndSanitizeUser,
  isExistentId,
};
