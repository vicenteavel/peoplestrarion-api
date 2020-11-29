# PeopleStration API

Uma API REST para uma aplicação de cadastro de pessoas em Node.js

## Tecnologias Utilizadas

- Express.js
- Knex.js
- MySQL
- JSON Web Token (JWT)

## Endpoints disponíveis

```
POST /authenticate

GET /people
POST /people
PUT /people/:id
DELETE /people/:id
```

Sendo executada em http://localhost:3333

Para executar todas as rotas precisará está autenticado, ou seja, executar a rota POST /authenticate.

## Para instalar e executar

- Criar um Banco de Dados MySQL de nome: ```peoplestration```
- Acessar o arquivo o ```./knexfile.js``` para configurar o ```host```, ```user``` e ```password``` do Banco de Dados.
- Rodar os seguintes comandos no terminal dentro da pasta raiz do projeto:

```
yarn
knex migrate:latest
knex seed:run
yarn start
```

Será criado um usuário para acesso à aplicação de:

```
username: admin
password: admin
```