'use strict';

const express = require('express');
const router = express.Router();
const ListController = require('./../controllers/list.controller');

let listController = new ListController();

// establece rutas REST
router.get('/list', (req, res) => listController.index(req, res));
router.post('/list', (req, res) => listController.create(req, res));
router.get('/list/:id', (req, res) => listController.show(req, res));
router.put('/list/:id', (req, res) => listController.update(req, res));
router.delete('/list/:id', (req, res) => listController.destroy(req, res));

module.exports = router;