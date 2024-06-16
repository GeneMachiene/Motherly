const { param } = require("express-validator");

const validateMongoId = (location) => {
  return param("id")
    .isMongoId()
    .withMessage(`${location} with provided ID does not exist.`);
};

module.exports = { validateMongoId };
