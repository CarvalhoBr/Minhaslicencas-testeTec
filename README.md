<h1> Teste técnico Minhas licenças (Backend)

A especificação completa do teste pode ser encontrada [aqui](https://github.com/dev-ykron/teste-fullstack-frontend-backend)


<h2>Execução do projeto

Para visualização não é necessário instalar as dependencias, pode ser executado com:
```bash
docker-compose up
```
Para edição instale as dependências com:
```bash
yarn
```
ou
```bash
npm install
```


<h2> Dependências utilizadas

 - Typescript
 - Express
 - Knex (query builder)
 - Yup (validação de dados)

<h2>Recursos</h2>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=VeiculosAPI&uri=https%3A%2F%2Fgithub.com%2FCarvalhoBr%2FTesteTecnico_MinhasLicencas%2Fblob%2Fmaster%2FInsomnia_2020-09-25.json)

```URL
GET:http://localhost:3333/veiculos
```
Lista todos os veículos
___
```URL
GET:http://localhost:3333/veiculos/:id
```
Lista o veículo de acordo com o id
___
```URL
GET:http://localhost:3333/veiculos/find?search=(ano, veiculo, marca)
```
Procura por veículos de acordo com ano, marca ou modelo

A requisição retornará erro 400 se a busca estiver com valor vazio
___
```URL
POST:http://localhost:3333/veiculos
```
Cria um novo veículo

Requisição:
```JSON
{
	"veiculo": "Palio",
	"marca": "Fiat",
	"ano": "2020",
	"descricao": "Carro em prefeito estado",
	"vendido": false
}
```
Resposta: 
```JSON
{
  "Carro cadastrado com sucesso": {
    "id": [
      1
    ]
  }
}
``` 
A requisição retornará erro 400 se não forem enviados todos os dados ou se forem enviados dados a mais

___
```URL
PUT:http://localhost:3333/veiculos/:id
```
Edita todos os dados de determinado veículo

Requisição:
```JSON
{
	"veiculo": "Palio",
	"marca": "Fiat",
	"ano": "2020",
	"descricao": "Carro novo",
	"vendido": false
}
```

Resposta:
```JSON
[
  {
    "id": 1,
    "veiculo": "Palio",
    "marca": "Fiat",
    "ano": 2020,
    "descricao": "Carro novo",
    "vendido": false,
    "created_at": "2020-09-25T00:54:46.211Z",
    "updated_at": "2020-09-25T01:34:23.821Z"
  }
]
```
A requisição retornará erro 400 se não forem enviados todos os dados ou se forem enviados dados a mais
___
```URL
PATCH:http://localhost:3333/veiculos/:id
```
Edita alguns dados de determinado veículo

Requisição: 
```JSON
{
	"veiculo":  "308"(Opcional),  
	"marca":  "Peugeot"(Opcional),  
	"ano":  "2020"(Opcional),  
	"descricao":  "Carro novo"(Opcional),  
	"vendido":  true(Opcional)
}
```
Resposta:
```JSON
[
  {
    "id": 1,
    "veiculo": "308",
    "marca": "Peugeot",
    "ano": 2020,
    "descricao": "Carro novo",
    "vendido": true,
    "created_at": "2020-09-25T00:54:46.211Z",
    "updated_at": "2020-09-25T01:34:27.413Z"
  }
]
```
A requisição retornará erro 400 se forem enviados dados a mais
___
```URL
DELETE:http://localhost:3333/veiculos/:id
```
Exclui um veículo

<h2> Estrutura de arquivos</h2>

```bash
.
├── docker-compose.yml
├── Dockerfile
├── .gitignore
├── knexfile.ts
├── package.json
├── README.md
├── src
│   ├── controllers
│   ├── database
│   │   ├── connection.ts
│   │   ├── migrations
│   │   └── triggers
│   ├── repositories
│   ├── models
│   ├── index.ts
│   └── routes.ts
├── tsconfig.json
├── .vscode
└── yarn.lock
```

<h3>index.ts </h3>
Entrypoint onde é feita a configração do servidor
<h3>routes.ts </h3>
Rotas da aplicação, recebem as requisições e encaminham para os controllers corretos
<h3>controllers</h3>
Validam os dados recebidos na requisição e encaminham para o repository
<h3>database</h3>
Configurações de conexão do banco de dados, migrations e triggers
<h3>repositories</h3>
Onde as operações no banco são feitas 
<h3>models</h3>
Interfaces que serão usadas pelo repository
	
