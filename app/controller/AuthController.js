const User = require("../models/User")

const login = async (req, res, next) => {
  const body = req.body

  try {
    const user = await User.attempt(body.email, body.password)
    res.json(user)
  } catch (error) {
    res.status(400)
    res.json(error.message)
  }
}

const AuthController = {
  login
}

module.exports = AuthController