const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userModel = require('../models/user.model')
const authConfig = require('../config/auth.json')

module.exports = {

     //para poder criar um novo usuario

     async user(req, res) {

          const { username, email, password, password2} = req.body

          //confima se tem nome e password, e confirma se password2 é igual ao 1
          if (username && password) {
               if (password === password2) {
     
                    try {
                         //verifica se já existe o usuario
                         const userFind = await userModel.findOne({email: email })
                         //caso exista  
                         if (userFind) {
                              console.log('usuário encontrado')
                              return res.status(500).send({ error: 'Usuário já existe' })

                         } else {
                              //faz a criptografia da senha
                              bcrypt.hash(password, 10)
                                   .then(hash => {
                                        let encryptedPassword = hash
                                        req.body.password = encryptedPassword
                                        //chama a criação de usuario                              
                                        this.createUser(req.body, res)
                                   })
                                   .catch(
                                        error => res.json({
                                             succcess: false,
                                             message: error,
                                             statusCode: 500
                                        })
                                   )

                         }

                    } catch{
                         console.log('Erro ao criar usuário')
                         return res.status(500).send({ error: 'Dados estão incorretos' })
                    }

               } else {
                    return res.status(500).send({ error: 'Senhas não são iguais' })
               }
          } else {
               return res.status(500).send({ error: 'Usuário ou senha estão faltando' })
          }
     },

     //para poder criar um usuario
     async createUser(body, res) {
          try {
               const user = await userModel.create(body)
               return res.status(201).send({ 
                    usuario: user, 
                    token: this.generateToken({ id: user.id}) 
               })

          } catch (error) {
               return res.status(400).send({ error: 'Usuário não pode ser encontrado' })
          }
     },

     //autenticar usuario 
     async authenticate(req, res){
          const {email, password } = req.body
      
          const user = await userModel.findOne({email: email}).select('+password')
          console.log(user)
          if(!user)
               return res.status(400).send({ error: 'User not found'})
          if(!await bcrypt.compare(password, user.password))
               return res.status(400).send({ error: 'Invalid password'})

          user.password = undefined
           
          res.send({ user, token: this.generateToken({ user }) })
     },

     //gerar token
     generateToken(params = {}){
          return token = jwt.sign(params , authConfig.secret, { expiresIn : 864000 })
     }
}