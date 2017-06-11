'use strict';

const express = require('express');
const router = express.Router();
const List = require('./../controllers/list.controller');

let list = new List();

router.get('/list', (req, res) => list.index(req, res));
router.post('/list', (req, res) => list.create(req, res));
router.get('/list/:id', (req, res) => list.show(req, res));
router.put('/list', (req, res) => list.update(req, res));
router.delete('/list', (req, res) => list.destroy(req, res));

module.exports = router;