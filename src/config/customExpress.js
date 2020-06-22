const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const consign = require('consign')

const routerEmpresa = require('../routes/empresa.routes') // carregando rotas do supermercado
const routerUsuario = require('../routes/usario.routes')

module.exports = () =>{

     const app = express()

     //declara o cors da API
     var corsOptions = {
          origin: '*',
          methods: ['GET', 'PUT', 'POST', 'DELETE'],
     }
     
     app.use(cors(corsOptions))

     app.use(bodyParser.urlencoded({extended: true}))
     app.use(bodyParser.json())
     app.use(routerUsuario)
     app.use(routerEmpresa)

     return app
}