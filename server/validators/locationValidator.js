const { body } = require("express-validator");

const validateAndSanitizeCreateRegion = () => {
  return body("name")
    .trim()
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 100 })
    .withMessage("Name must not exceed 100 characters");
};

const validateAndSanitizeUpdateRegion = validateAndSanitizeCreateRegion;

const validateAndSanitizeCreateProvince = () => {
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

const validateAndSanitizeUpdateProvince = validateAndSanitizeCreateProvince;

const validateAndSanitizeCreateCity = () => {
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

const validateAndSanitizeUpdateCity = validateAndSanitizeCreateCity;

const validateAndSanitizeCreateBarangay = () => {
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

const validateAndSanitizeUpdateBarangay = validateAndSanitizeCreateBarangay;

module.exports = {
  validateAndSanitizeCreateRegion,
  validateAndSanitizeCreateProvince,
  validateAndSanitizeCreateCity,
  validateAndSanitizeCreateBarangay,
};
