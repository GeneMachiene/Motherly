const { body } = require("express-validator");

const validateAndSanitizeRegion = () => {
  return body("name")
    .trim()
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 100 })
    .withMessage("Name must not exceed 100 characters");
};

const validateAndSanitizeProvince = () => {
  return [
    body("name")
      .trim()
      .isString()
      .withMessage("Name must be a string")
      .isLength({ max: 100 })
      .withMessage("Name must not exceed 100 characters"),
    body("region").isMongoId().withMessage("Region must be a valid MongoDB ID"),
  ];
};

const validateAndSanitizeCity = () => {
  return [
    body("name")
      .trim()
      .isString()
      .withMessage("Name must be a string")
      .isLength({ max: 100 })
      .withMessage("Name must not exceed 100 characters"),
    body("province")
      .isMongoId()
      .withMessage("Province must be a valid MongoDB ID"),
  ];
};

const validateAndSanitizeBarangay = () => {
  return [
    body("name")
      .trim()
      .isString()
      .withMessage("Name must be a string")
      .isLength({ max: 100 })
      .withMessage("Name must not exceed 100 characters"),
    body("city").isMongoId().withMessage("City must be a valid MongoDB ID"),
  ];
};

module.exports = {
  validateAndSanitizeRegion,
  validateAndSanitizeProvince,
  validateAndSanitizeCity,
  validateAndSanitizeBarangay,
};
