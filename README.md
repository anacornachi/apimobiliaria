# Apimobiliária

Esse projeto foi desenvolvido como método de avaliação no curso de Desenvolvimento Web - Full Stack da
Resilia Educação. Foi desenvolvido um CRUD utilizando Node.js e Express, Sequelize como ORM e Docker para
virtualização do banco de dados PostgreSQL.

## Rode localmente

Clone o projeto

```bash
  git clone https://github.com/anacornachi/apimobiliaria.git
```

Acesse o diretório

```bash
  cd apimobiliaria
```

Instale as dependencias

```bash
  npm install
```

Inicialize o banco de dados localmente e inicie o servidor e popule o banco com algumas informações

```bash
  docker-compose up
```

Para finalizar e remover os containers em execução, rode

```bash
  docker-compose down
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Referência de API

#### Retorna todas as imobiliárias cadastradas

```http
  GET /realestate
```

#### Retorna somente 1 imobiliária

```http
  GET /realestate/${cnpj}
```

| Parametro | Tipo     | Descrição                          |
| :-------- | :------- | :--------------------------------- |
| `cnpj`    | `string` | **Requerido**. CNPJ da imobiliária |

#### Cria uma imobiliária no banco

```http
  POST /register/realestate
```

Parametros referentes a imobiliária necessários no corpo da requisição:

| Parametro           | Tipo     | Descrição                                                        |
| :------------------ | :------- | :--------------------------------------------------------------- |
| `name`              | `string` | **Requerido**. Nome da imobiliária                               |
| `city`              | `string` | **Requerido**. Cidade da imobiliária                             |
| `cnpj`              | `string` | **Requerido**. CNPJ da imobiliária                               |
| `email`             | `string` | **Requerido**. Email da imobiliária                              |
| `initialBroker`     | `string` | **Requerido**. Quantidade inicial de corretores da imobiliária   |
| `initialProperties` | `string` | **Requerido**. Quantidade inicial de propriedades da imobiliária |
| `adminCpf`          | `string` | **Requerido**. CPF do responsável                                |
| `adminName`         | `string` | **Requerido**. Nome do responsável                               |
| `password`          | `string` | **Requerido**. Senha de acesso da imobiliaria                    |

```
{
    "name": "",
    "city": "",
    "cnpj": "",
    "email": "",
    "initialBroker": "",
    "initialProperties": "",
    "adminCpf": "",
    "adminName": "",
    "password": ""
}
```

#### Atualiza todos os dados de uma imobiliária

```http
  PUT /realestate/${cnpj}
```

| Parametro | Tipo     | Descrição                          |
| :-------- | :------- | :--------------------------------- |
| `cnpj`    | `string` | **Requerido**. CNPJ da imobiliária |

Parametros referentes a imobiliária necessários no corpo da requisição:

```
{
    "name": "",
	"city": "",
	"cnpj": "",
    "email": "",
	"adminCpf": "",
    "adminName": "",
	"password": ""
}
```

#### Atualiza parcialmente os dados de uma imobiliária

```http
  PATCH /realestate/${cnpj}
```

| Parametro | Tipo     | Descrição                          |
| :-------- | :------- | :--------------------------------- |
| `cnpj`    | `string` | **Requerido**. CNPJ da imobiliária |

Podem ser utilizados 1 (um) ou mais dos parametros abaixo para atualização:

```
{
    "name": "",
	"city": "",
	"cnpj": "",
    "email": "",
	"adminCpf": "",
    "adminName": "",
	"password": ""
}
```

#### Deleta os dados de uma imobiliária

```http
  DELETE /realestate/${cnpj}
```

| Parametro | Tipo     | Descrição                          |
| :-------- | :------- | :--------------------------------- |
| `cnpj`    | `string` | **Requerido**. CNPJ da imobiliária |

## Tecnologias

**Server:**

- Node.js
- Express
- Sequelize
- Docker
- Docker Compose
- Cors
- Dotenv
- Passport | Passport-JWT

## Rodando testes

Para rodar testes, rode o comando

```bash
  npm run test
```

## Feedback

If you have any feedback, please reach out to us at fake@fake.com

#

Feito com amor por Ana Cornachi
