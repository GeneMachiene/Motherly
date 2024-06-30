const { body } = require("express-validator");

const validateAndSanitizeAppointment = () => {
  return [
    body("datetime_of_appointment")
      .exists({ checkFalsy: true })
      .withMessage("Datetime of appointment is required")
      .trim()
      .isISO8601()
      .withMessage("Must be a valid ISO 8601 date")
      .toDate()
      .custom((value) => {
        if (value <= Date.now()) {
          throw new Error("The date must be in the future");
        }
        return true;
      }),
    body("purpose")
      .exists({ checkFalsy: true })
      .withMessage("Purpose is required")
      .trim()
      .isString()
      .withMessage("Purpose must be a string")
      .isLength({ max: 1000 })
      .withMessage("Purpose is too long"),
    body("status")
      .optional()
      .isString()
      .withMessage("Status must be a string")
      .isIn(["Pending", "Finished", "Cancelled"])
      .withMessage(
        'Status must be one of ["Pending", "Finished", "Cancelled"]'
      ),
  ];
};

module.exports = { validateAndSanitizeAppointment };
