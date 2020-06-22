const mongoose = require('../config/db')

const UserSchema = new mongoose.Schema({

     username:{
          type: String,
          required: true
     },

     password:{
          type: String,
          required: true,
          select: false
     },

     email:{
          type: String,
          required: true,
          lowercase: true
     },

     isEmpresa: { 
          type: Boolean,  
          required: true,
          default: false
     },

     nomeEmpresa: {
           type: String,
           require: true
     },

     isEntregador: {
          type: Boolean,
          required: true,
          default: false
     }


})

const Usuario = mongoose.model('Usuario', UserSchema)

module.exports = Usuario