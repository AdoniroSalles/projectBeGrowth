const express = require('express')

const empresaController = require('../controllers/empresa.controller')

const router = express.Router()

//recupera lista de supermercados
router.get('/empresa', (req,res) => empresaController.list(req, res))
router.get('/empresa/:id', (req,res) => empresaController.listOne(req, res))
//manda os dados do supermercado
router.post('/empresa', (req, res) => empresaController.create(req, res)) 
//atualiza dado da lista
router.put('/empresa', (req,res) => empresaController.update(req,res) )

module.exports = router