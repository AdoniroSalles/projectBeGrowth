const customExpress = require('./src/config/customExpress')

const port = 3000
const app = customExpress()

app.listen(3000, ()=> {
     console.log(`Servidor rodando na porta ${port}`)
})