const { body } = require("express-validator");

const validateAndSanitizeUser = () => {
  return [
    body("email").trim().isEmail().withMessage("Invalid email address"),
    body("password").trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("contact_number").trim()
      .optional()
      .isMobilePhone()
      .withMessage("Invalid contact number"),
    body("personal_information.name.last_name").trim()
      .isString()
      .withMessage("Last name must be a string"),
    body("personal_information.name.first_name").trim()
      .isString()
      .withMessage("First name must be a string"),
    body("personal_information.name.middle_name").trim()
      .isString()
      .withMessage("Middle name must be a string"),
    body("personal_information.name.suffix").trim()
      .optional()
      .isString()
      .withMessage("Suffix must be a string"),
    body("personal_information.address.region").trim()
      .optional()
      .isString()
      .withMessage("Region must be a string"),
    body("personal_information.address.province").trim()
      .optional()
      .isString()
      .withMessage("Province must be a string"),
    body("personal_information.address.city").trim()
      .optional()
      .isString()
      .withMessage("City must be a string"),
    body("personal_information.address.district").trim()
      .optional()
      .isString()
      .withMessage("District must be a string"),
    body("personal_information.address.barangay").trim()
      .optional()
      .isString()
      .withMessage("Barangay must be a string"),
    body("personal_information.address.residence").trim()
      .isString()
      .withMessage("Residence must be a string"),
    body("personal_information.address.street").trim()
      .optional()
      .isString()
      .withMessage("Street must be a string"),
    body("personal_information.birthdate").trim()
      .isISO8601()
      .toDate()
      .withMessage("Invalid birthdate"),
    body("personal_information.age").trim()
      .optional()
      .isInt()
      .withMessage("Age must be an integer"),
    body("personal_information.marital_status").trim()
      .isIn(["Single", "Married", "Widowed", "Legally Separated"])
      .withMessage("Invalid marital status"),
    body("personal_information.sex").trim()
      .isIn(["Male", "Female", "Prefer not to say", "Other"])
      .withMessage("Invalid sex"),
    body("personal_information.place_of_birth").trim()
      .isString()
      .withMessage("Place of birth must be a string"),
    body("personal_information.contact_one").trim()
      .optional()
      .isString()
      .withMessage("Contact one must be a string"),
    body("personal_information.contact_two").trim()
      .optional()
      .isString()
      .withMessage("Contact two must be a string"),
    body("personal_information.messenger_name").trim()
      .optional()
      .isString()
      .withMessage("Messenger name must be a string"),
    body("personal_information.religion").trim()
      .optional()
      .isString()
      .withMessage("Religion must be a string"),
    body("personal_information.language_spoken").trim()
      .optional()
      .isString()
      .withMessage("Language spoken must be a string"),
    body("personal_information.tin").trim()
      .optional()
      .isString()
      .withMessage("TIN must be a string"),
    body("personal_information.gsis_or_sss").trim()
      .optional()
      .isString()
      .withMessage("GSIS/SSS must be a string"),
    body("family.name_of_spouse.last_name").trim()
      .optional()
      .isString()
      .withMessage("Spouse last name must be a string"),
    body("family.name_of_spouse.first_name").trim()
      .optional()
      .isString()
      .withMessage("Spouse first name must be a string"),
    body("family.name_of_spouse.middle_name").trim()
      .optional()
      .isString()
      .withMessage("Spouse middle name must be a string"),
    body("family.name_of_spouse.suffix").trim()
      .optional()
      .isString()
      .withMessage("Spouse suffix must be a string"),
    body("family.name_of_father.last_name").trim()
      .optional()
      .isString()
      .withMessage("Father last name must be a string"),
    body("family.name_of_father.first_name").trim()
      .optional()
      .isString()
      .withMessage("Father first name must be a string"),
    body("family.name_of_father.middle_name").trim()
      .optional()
      .isString()
      .withMessage("Father middle name must be a string"),
    body("family.name_of_father.suffix").trim()
      .optional()
      .isString()
      .withMessage("Father suffix must be a string"),
    body("family.name_of_mother.last_name").trim()
      .optional()
      .isString()
      .withMessage("Mother last name must be a string"),
    body("family.name_of_mother.first_name").trim()
      .optional()
      .isString()
      .withMessage("Mother first name must be a string"),
    body("family.name_of_mother.middle_name").trim()
      .optional()
      .isString()
      .withMessage("Mother middle name must be a string"),
    body("family.name_of_mother.suffix").trim()
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
