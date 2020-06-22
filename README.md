# Projeto Be Growth

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de desenvolvedor junior da Be Growth.
Para tanto a aplicação foi desenvolvida em duas partes, a back-end e a front-end. Neste repósitorio se encotnra a parte Back-End da aplicação, para a parte Front-End acesse o link: 

 
## Back-end
Para o back-end da aplicação foi desenvolvido uma API REST feita em node junto com express e como banco de dados foi usado mongodb, esta API segue o padrão MVC. Para ajudar e melhorar o desempenho, foram utilizado alguns pacotes, como: express, mangoose, body-parser e moment.

## Para poder rodar a aplicação:
1. Baixe ou clone o repositório no seu computador
2. Dentro da pasta em que esta o árquivo, rode o comando abaixo para poder instalar as dependências do projeto
```
npm install
```
3. Agora dentro da pasta config, no arquivo db.js. Altere o o mongoose.connect para o endereço do seu banco de dados
```tree 
├───config
│       auth.json
│       customExpress.js
│       db.js
│
├───controllers
│       empresa.controller.js
│       usuario.controller.js
│
├───models
│       empresa.model.js
│       user.model.js
│
└───routes
        empresa.routes.js
        usario.routes.js
```
```
mongoose.connect(
     'seu_banco', { 
          useNewUrlParser: true,
          useUnifiedTopology: true 
     })
```
4. Após fazerem esses passos rode o comando abaixo pelo cmd
```
npm start
```

Feito isso a API estará rodando 

Se tudo estiver rodando da maneira correta a mensagem abaixo aparecerá no terminal
```
Servidor rodando na porta 3000
Banco de dados conectado
```

Agora o segundo passo é rodar a aplicação Front-End
