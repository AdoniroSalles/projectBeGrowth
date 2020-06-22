const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(
     'seu-banco', { 
          useNewUrlParser: true,
          useUnifiedTopology: true 
     })


const db = mongoose.connection

db.on('error', console.error.bind(console, 'erro de conexão: '))
db.once('open', () => {
     console.log('Banco de dados conectado')
})

module.exports = mongoose