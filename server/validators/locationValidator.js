const { body } = require("express-validator");

const validateAndSanitizeRegion = () => {
  return body("name")
    .trim()
    .isString()
    .withMessage("Name must be a string")
    .isLength({ max: 100 })
    .withMessage("Name must not exceed 100 characters");
};

const validateAndSanitizeProvince = (action) => {
  if (action === "create") {
    return [
      body("name")
        .trim()
        .isString()
        .withMessage("Name must be a string")
        .isLength({ max: 100 })
        .withMessage("Name must not exceed 100 characters"),
      body("region")
        .isMongoId()
        .withMessage("Region must be a valid MongoDB ID"),
    ];
  } else if (action === "update") {
    return body("name")
      .trim()
      .isString()
      .withMessage("Name must be a string")
      .isLength({ max: 100 })
      .withMessage("Name must not exceed 100 characters");
  }
};

const validateAndSanitizeCity = (action) => {
  if (action === "create") {
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
  } else if (action === "update") {
    return body("name")
      .trim()
      .isString()
      .withMessage("Name must be a string")
      .isLength({ max: 100 })
      .withMessage("Name must not exceed 100 characters");
  }
};

const validateAndSanitizeBarangay = (action) => {
  if (action === "create") {
    return [
      body("name")
        .trim()
        .isString()
        .withMessage("Name must be a string")
        .isLength({ max: 100 })
        .withMessage("Name must not exceed 100 characters"),
      body("city").isMongoId().withMessage("City must be a valid MongoDB ID"),
    ];
  } else if (action === "update") {
    return body("name")
      .trim()
      .isString()
      .withMessage("Name must be a string")
      .isLength({ max: 100 })
      .withMessage("Name must not exceed 100 characters");
  }
};

module.exports = {
  validateAndSanitizeRegion,
  validateAndSanitizeProvince,
  validateAndSanitizeCity,
  validateAndSanitizeBarangay,
};
