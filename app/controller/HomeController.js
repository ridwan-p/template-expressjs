const User = require("../models/User")

const index = (req, res, next) => {
  return res.send('Welcome to my apps')
}
const HomeController = {
  index
}
module.exports = HomeController