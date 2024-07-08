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
      // can't get this to work (doesn't compare time properly)
      // .custom((value) => {
      //   console.log('Date.now(): ', Date.now(), ' > ', Instant.parse( value ).toEpochMilli())

      //   if (Instant.parse( value ).toEpochMilli() <= Date.now()) {
      //     throw new Error("The date must be in the future");
      //   }
      //   return true;
      // })
      ,
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
    body("patient")
      .optional()
      .isString()
      .withMessage("Patient must be a string")
      .isIn(["Mother", "Child", "Partner"])
      .withMessage(
        'Patient must be one of ["Mother", "Child", "Partner"]'
      ),
    body("user_id")
      .exists({ checkFalsy: true })
      .withMessage("User is required")
  ];
};

module.exports = { validateAndSanitizeAppointment };
