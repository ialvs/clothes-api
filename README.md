# API REST para Gerenciamento de Localização de Roupas de Usuário

Essa é uma API RESTful escrita em NestJS que utiliza TypeORM e SQLite para gerenciar a localização das roupas de um usuário. Com ela, é possível criar, atualizar, remover e listar as roupas de um usuário, além de registrar a localização atual da roupa.

## Instalação

Antes de tudo, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

1. Clone o repositório para sua máquina:
`git clone https://github.com/ialvs/clothes-api.git`

2. Acesse a pasta da API:
`cd clothes-api`

3. Instale as dependências:
`npm install` ou `yarn install`

4. Inicie a aplicação:
`npm start`

## Uso

A API utiliza a porta 3000 por padrão. As rotas disponíveis são:

**Usuários:**

- **GET /users/**: Retorna uma lista com todos os usuários.
- **GET /users/:userId/**: Retorna as informações de um usuário.
- **POST /users/**: Cria um novo usuário.
- **PUT /users/:userId/**: Atualiza as informações de um usuário.
- **DELETE /users/:userId/**: Remove as informações de um usuário.

**Roupas:**
- **GET /clothes/**: Retorna uma lista com todas as roupas.
- **GET /clothes/:clothId/**: Retorna as informações de uma roupa.
- **GET /clothes/user/:userId**: Retorna uma lista com todas as roupas de um usuário.
- **GET /clothes/:clothId/user/:userId**: Retorna as informações de uma roupa específica de um usuário.
- **POST /clothes/**: Cria uma nova roupa.
- **PUT /clothes/:clothId/**: Atualiza as informações de uma roupa.
- **DELETE /clothes/:clothId/**: Remove as informações de uma roupa.

**Localizações:**
- **GET /locations/**: Retorna uma lista com todas as localizações.
- **GET /locations/:locationId**: Retorna as informações de uma roupa.
- **POST /locations/**: Cria uma nova localização.
- **PUT /locations/:locationId**: Atualiza as informações de uma localização.
- **DELETE /locations/locationId**: Deleta as informações de uma localização.

## Tecnologias utilizadas

- Typescript
- NestJS
- TypeORM
- SQLite

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request se quiser ajudar a melhorar a API.

Pendências: 
- Atualizar o arquivo openapi.

## Licença

Esse projeto está sob a licença GNU GPLv3 .
