const express = require("express")
const cors = require("cors")
const path = require("path")
const connectDB = require("./config/db")
const dorenv = require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 3000

// conection to the database

connectDB()

// Configurer le dossier 'my-images' comme un dossier statique
app.use('/images', express.static(path.join(__dirname, 'my-images')));

// middlewares

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/images', require('./rootes/image.routes'))

// we loumch the server
app.listen(PORT, () => console.log(`server started at port ${PORT}`))