# Apimobiliária

Esse projeto foi desenvolvido como método de avaliação no curso de Desenvolvimento Web - Full Stack da
Resilia Educação. Foi desenvolvido um CRUD utilizando Node.js e Express, Sequelize como ORM e Docker para
virtualização do banco de dados PostgreSQL.

## Requerimentos

Docker 20+
Node.js 16+

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

Se tiver algum feedback, entre em contato.

#

Feito com 💛 por Ana Cornachi
