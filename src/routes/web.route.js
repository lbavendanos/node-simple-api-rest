'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/user.controller');

let userController = new UserController();

// establece rutas REST
router.post('/register', (req, res) => userController.register(req, res));
router.post('/login', (req, res) => userController.login(req, res));

module.exports = router;