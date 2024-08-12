const express = require('express');
const multer = require('multer')
const { setImage, getImage } = require('../controllers/image.controller');
const router = express.Router();

router.get('/', getImage)

const upload = multer({ storage: multer.memoryStorage() })

router.post('/', upload.single('file'), setImage)

module.exports = router