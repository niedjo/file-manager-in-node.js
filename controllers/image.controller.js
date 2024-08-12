const ImageModel = require("../models/image.model")
const { initializeApp } = require("firebase/app")
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage")
const firebaseConfig = require("../config/firebase.config")

module.exports.setImage = async (req, res) => {
    try {
        !req.file && res.status(400).json({ message : "Please, add an image"})
    
        // on initialise firebase
        initializeApp(firebaseConfig)

        const dateTime = Date.now()
        const storage = getStorage()

        const storageRef = ref(storage, `file/${dateTime}${req.file.originalname}`)

        // Create file metadata including the content type
        const metadata = {
            contentType : req.file.mimetype
        }

        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

        const downloadURL = await getDownloadURL(snapshot.ref)
        // we save the image in our database
    
        const image = await ImageModel.create({
            imageName : `${dateTime}${req.file.originalname}`,
            imageUri : downloadURL
        })
        
        // we send response

        console.log(req.file);
    
        res.status(200).json({
            message : "Succes",
            url : downloadURL
        })
        // res.status(200).json(image)
    } catch (error) {
        res.status(400).send(error.message)
        throw new Error(error);
    }
}

module.exports.getImage = async (req, res) => {
    try {
        const image = await ImageModel.find()
        res.status(200).json(image)
    } catch (error) {
        throw new Error(error);
    }
}