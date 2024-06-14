const { body } = require("express-validator");

const validateAndSanitizeUser = () => {
  return [
    body("email").trim().isEmail().withMessage("Invalid email address"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("contact_number")
      .optional()
      .trim()
      .isMobilePhone()
      .withMessage("Invalid contact number"),
    body("personal_information.name.last_name")
      .trim()
      .isString()
      .withMessage("Last name must be a string"),
    body("personal_information.name.first_name")
      .trim()
      .isString()
      .withMessage("First name must be a string"),
    body("personal_information.name.middle_name")
      .trim()
      .isString()
      .withMessage("Middle name must be a string"),
    body("personal_information.name.suffix")
      .optional()
      .trim()
      .isString()
      .withMessage("Suffix must be a string"),
    body("personal_information.address.region")
      .optional()
      .isMongoId()
      .withMessage("Region must be a valid MongoDB ID"),
    body("personal_information.address.province")
      .optional()
      .isMongoId()
      .withMessage("Province must be a valid MongoDB ID"),
    body("personal_information.address.city")
      .optional()
      .isMongoId()
      .withMessage("City must be a valid MongoDB ID"),
    body("personal_information.address.district")
      .optional()
      .trim()
      .isString()
      .withMessage("District must be a string"),
    body("personal_information.address.barangay")
      .optional()
      .isMongoId()
      .withMessage("Barangay must be a valid MongoDB ID"),
    body("personal_information.address.residence")
      .trim()
      .isString()
      .withMessage("Residence must be a string"),
    body("personal_information.address.street")
      .optional()
      .trim()
      .isString()
      .withMessage("Street must be a string"),
    body("personal_information.birthdate")
      .trim()
      .isISO8601()
      .toDate()
      .withMessage("Invalid birthdate"),
    body("personal_information.marital_status")
      .trim()
      .isIn(["Single", "Married", "Widowed", "Legally Separated"])
      .withMessage("Invalid marital status"),
    body("personal_information.sex")
      .trim()
      .isIn(["Male", "Female", "Prefer not to say", "Other"])
      .withMessage("Invalid sex"),
    body("personal_information.place_of_birth")
      .trim()
      .isString()
      .withMessage("Place of birth must be a string"),
    body("personal_information.contact_one")
      .optional()
      .trim()
      .isString()
      .withMessage("Contact one must be a string"),
    body("personal_information.contact_two")
      .optional()
      .trim()
      .isString()
      .withMessage("Contact two must be a string"),
    body("personal_information.messenger_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Messenger name must be a string"),
    body("personal_information.religion")
      .optional()
      .trim()
      .isString()
      .withMessage("Religion must be a string"),
    body("personal_information.language_spoken")
      .optional()
      .trim()
      .isString()
      .withMessage("Language spoken must be a string"),
    body("personal_information.tin")
      .optional()
      .trim()
      .isString()
      .withMessage("TIN must be a string"),
    body("personal_information.gsis_or_sss")
      .optional()
      .trim()
      .isString()
      .withMessage("GSIS/SSS must be a string"),
    body("family.name_of_spouse.last_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Spouse last name must be a string"),
    body("family.name_of_spouse.first_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Spouse first name must be a string"),
    body("family.name_of_spouse.middle_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Spouse middle name must be a string"),
    body("family.name_of_spouse.suffix")
      .optional()
      .trim()
      .isString()
      .withMessage("Spouse suffix must be a string"),
    body("family.name_of_father.last_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Father last name must be a string"),
    body("family.name_of_father.first_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Father first name must be a string"),
    body("family.name_of_father.middle_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Father middle name must be a string"),
    body("family.name_of_father.suffix")
      .optional()
      .trim()
      .isString()
      .withMessage("Father suffix must be a string"),
    body("family.name_of_mother.last_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Mother last name must be a string"),
    body("family.name_of_mother.first_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Mother first name must be a string"),
    body("family.name_of_mother.middle_name")
      .optional()
      .trim()
      .isString()
      .withMessage("Mother middle name must be a string"),
    body("family.name_of_mother.suffix")
      .optional()
      .trim()
      .isString()
      .withMessage("Mother suffix must be a string"),
  ];
};

module.exports = {
  validateAndSanitizeUser,
};
