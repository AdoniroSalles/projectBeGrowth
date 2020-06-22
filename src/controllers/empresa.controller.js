const moment = require('moment')
const empresaModel = require ('../models/empresa.model')
const { update } = require('../models/empresa.model')

module.exports = {

     async create (req, res) {

          const requerimento = req.body

          //faz a formatação na data para q ela possa ser salva
          requerimento.validadeProduto = moment(requerimento.validadeProduto, 'YYYY-MM-DD').format('YYYY-MM-DD HH:MM:SS')

          console.log(requerimento)

          try{
               //salva supermercado no banco
               const empresaProduct = await empresaModel.create(req.body)
               return res.status(201).send({ empresa: empresaProduct })
          }catch(error){
               return res.status(400).send({ error: 'Not Found'})
          }
     },

     async list (req, res){
          try {
               //recupera a lista de supermercados
               const empresaProduct = await empresaModel.find()
               return res.status(200).send({ empresaProduct })
          }catch(error){
               return res.status(400).send({ error: 'Not found data'})
          }
     },

     async listOne(req, res){

          const id = req.params.id
          console.log(id)
          try {
               const listOne = await empresaModel.findById({ _id: id})
               return res.status(201).send({dados : listOne })
          } catch (error) {
               return res.status(400).send({ error: 'Not found data'})  
          }
     }, 

     async update(req, res){

          const update = req.body

          // console.log(id) 
          console.log(update)

          try{
               if( dados = await empresaModel.findById({ _id: req.body.id})){
                    
                    let doc = await empresaModel.findOneAndUpdate(update.id, update, { new: true });
                    return res.status(201).send({dados : doc })
               }                 
               
               return res.status(400).send({ error: 'Product not found'})
              
          }catch(error) { 
               return res.status(400).send({ error: 'Not found data'})
          }
     }
        
}