const { body } = require("express-validator");

const validateAndSanitizeRegion = () => {
  return body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 100 })
    .withMessage("Name must not exceed 100 characters");
};

module.exports = {
  userRegisterValidationRules,
};
