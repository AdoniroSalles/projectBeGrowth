const mongoose = require('../config/db')


const EmpresaSchema = new mongoose.Schema({
     nomeEmpresa: {
          type: String,
          required: true
     },
     produto: { 
          type: String,
          required: true
     },
     localColeta: {
          type: String,
          require: true
     },
     validadeProduto: {
          type: Date,

     },
     dataCadastro: {
          type: Date,
          default: Date.now
     },
     recolhido:{
          type: Boolean,
          default: false
     }
})

const Empresa = mongoose.model('Empresa', EmpresaSchema)

module.exports = Empresa