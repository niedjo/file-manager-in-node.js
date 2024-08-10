const mongoose = require('mongoose');

// create our schema

const imageSchema = mongoose.Schema(
    {
        imageName : {
            type : String,
            required : true,
        },
        imageUri : {
            type : String,
            required : true,
        } 
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('image', imageSchema)