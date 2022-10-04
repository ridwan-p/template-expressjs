const User = require('../models/User')

const index = async (req, res, next) => {
  const users = await User.findAndCountAll({
    limit: 5,
    offset: 0,
  })

  return res.json(users)
}


const store = async (req, res, next) => {
  const body = req.body

  try {
    const user = User.build({
      email: body.email,
      password: body.password
    })
    await user.save()

    res.json('success')
  } catch (error) {
    res.status(400)
    res.json(error.message)
  }
}


const update = async (req, res, next) => {
  const body = req.body
  try {
    const user = await User.findByPk(req.params.userId)
    user.email = body.email
    user.password = body.password
    await user.save()

    res.json('success')
  } catch (error) {
    res.status(400)
    res.json(error.message)
  }
}

const destory = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId)
    await user.destroy()

    res.json('success')
  } catch (error) {
    res.status(400)
    res.json(error.message)
  }
}

const UserController = {
  index,
  store,
  update,
  destory
}
module.exports = UserController