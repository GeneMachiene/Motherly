const express = require('express')

// controller functions
const {createChild, getChildren, getChildrenWhereID} = require('../controllers/childController')

const router = express.Router()

// create child
router.post('/create', createChild)

// get all
router.get('/all', getChildren)

// get where id
router.get('/:email', getChildrenWhereID)

module.exports = router