const HomeController = require('../app/controller/HomeController');

const Router = require('express').Router

const router = Router()

router.get('/', HomeController.index);

module.exports = router
