require('dotenv').config()
require('./connection').testConnection()

const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const routes = require('./routes')
const upload = multer()
const app = express()
// set port
const port = process.env.APP_PORT || 3000

// set body parser 
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(upload.array()) // for parsing multipart/form-data
// routes 
app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})