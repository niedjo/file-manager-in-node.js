const express = require('express');
const multer = require('multer')
const { setImage, getImage } = require('../controllers/image.controller');
const router = express.Router();

router.get('/', getImage)

let nom = ''

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'my-images/')
    },
    filename: function (req, file, cb) {
        nom = file.originalname
        cb(null, file.originalname)
        console.log(nom);
    }
})

const upload = multer({ storage: storage })

router.post('/', upload.single('file'), async (req, res) => {
    try {
        await setImage(nom)(req, res);
    } catch (error) {
        res.status(500).send('Something went wrong!');
    }
})

module.exports = router