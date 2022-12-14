const HomeController = require('../app/controller/HomeController');
const UserController = require('../app/controller/UserController');
const AuthController = require('../app/controller/AuthController');

const Router = require('express').Router

const router = Router()

router.get('/', HomeController.index);
router.post('/login', AuthController.login);

router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.put('/users/:userId', UserController.update);
router.delete('/users/:userId', UserController.destory);

module.exports = router
