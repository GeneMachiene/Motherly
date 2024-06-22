const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')


// controller functions
const {getImage, getPath, deleteImage} = require('../controllers/apiController') 
const router = express.Router()


// multer parameters
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir('./uploads/', err => {
			cb(null, './uploads/')
		})
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})



// Create
router.post('/upload', upload.single('file'), getPath)

// Read
router.get('/file/:filename', getImage)

// delete
router.delete('/file/:filename', deleteImage)

module.exports = router