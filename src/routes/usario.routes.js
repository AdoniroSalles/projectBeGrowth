const express = require('express')

const usuarioController = require('../controllers/usuario.controller')

const router = express.Router()

router.post('/create', (req, res) => usuarioController.user(req, res))
router.post('/authenticate', (req, res) => usuarioController.authenticate(req, res))

module.exports = router