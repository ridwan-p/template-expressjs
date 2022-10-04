require('dotenv').config()
require('./connection').testConnection()

const express = require('express')
const routes = require('./routes')

const app = express()
// set port
const port = process.env.APP_PORT || 3000

app.use('/', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})