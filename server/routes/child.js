const express = require('express')

// controller functions
const {createChild} = require('../controllers/childController')

const router = express.Router()

// create route
router.post('/create', createChild)

module.exports = router