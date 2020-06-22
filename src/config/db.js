const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(
     'mongodb+srv://projeto:root@cluster0-sru6i.mongodb.net/begrowth?retryWrites=true&w=majority', { 
          useNewUrlParser: true,
          useUnifiedTopology: true 
     })


const db = mongoose.connection

db.on('error', console.error.bind(console, 'erro de conexão: '))
db.once('open', () => {
     console.log('conectado')
})

module.exports = mongoose