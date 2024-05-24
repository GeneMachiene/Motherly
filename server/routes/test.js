const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.status(200).json({ status: "success", message: "Server is up and running!" });
  });

module.exports = router;
