const express = require('express')

// controller functions
const {createChild, getChildren} = require('../controllers/childController')

const router = express.Router()

// create route
router.post('/create', createChild)

// create route
router.get('/all', getChildren)

module.exports = router