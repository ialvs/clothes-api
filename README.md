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

- **GET /users/:userId/clothes**: Retorna uma lista com todas as roupas de um usuário.
- **GET /users/:userId/clothes/:clothesId**: Retorna as informações de uma roupa específica de um usuário.
- **POST /users/:userId/clothes**: Cria uma nova roupa para um usuário.
- **PUT /users/:userId/clothes/:clothesId**: Atualiza as informações de uma roupa de um usuário.
- **DELETE /users/:userId/clothes/:clothesId**: Remove uma roupa de um usuário.
- **POST /users/:userId/clothes/:clothesId/location**: Registra a localização atual de uma roupa de um usuário.


## Tecnologias utilizadas

- NestJS
- TypeORM
- SQLite

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request se quiser ajudar a melhorar a API.

## Licença

Esse projeto está sob a licença MIT.
