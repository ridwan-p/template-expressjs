const User = require("../models/User")

const index = (req, res, next) => {
  return res.send('Hi, is there anything I can help you with?')
}

module.exports = { index }