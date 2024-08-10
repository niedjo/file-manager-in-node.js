const ImageModel = require("../models/image.model")


module.exports.setImage = (filename) => async (req, res) => {
    try {
        !req.file && res.status(400).json({ message : "Please, add an image"})
    
        // we save the image in our database
    
        const image = await ImageModel.create({
            imageName : 'nana',
            imageUri : filename
        })
        // we send response

        console.log(filename);
    
        res.status(200).json(image)
    } catch (error) {
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