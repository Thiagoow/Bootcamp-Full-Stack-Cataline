import express, { request, response } from "express";
/*Importa o microframework express,
pra criarmos o mini servidor com Node.js,
após ele ser instalado com os comandos:

    npm i express
    (instala o express)

    npm i @types/express -D
    (Usado para podermos usa-lo junto com o Ts)
*/

console.log("Hello World :)");
/*Dando um console.log pra ver se o Ts
foi instalado corretamente, após os comandos:
    
    npm i typescript ts-node-dev -D
    (instala o Ts e o ts-node-dev 
    como dev dependency)

    npx tsc --init
    (Cria o tsconfig.json)
*/

//------------------A partir daqui, pertence ao HTTPMethods.ts:

//Método que vai construir meu app:
const app = express();
//Define para o express que ele usará o arquivo json (Usado no ParamsTypes.ts):
app.use(express.json());

//A porta que vai ouvir meu app, com uma arrow function:
app.listen("3333", () => {
  console.log("Back-end was started :D 😎");
});

/*
Métodos de requisições HTTP (CRUD + patch):
 C- Create = GET -> Buscar algo (Requisições padrões dos browser)
 R- Read = POST -> Criar algo (Necessário um ambiente de desenvolvimento de API)
 U- Update = PUT -> Alterar algo
 D- Delete = DELETE -> Deletar algo
 PATCH -> Altera uma informação específica
*/

/*
Para testar essas requisições, perceba que precisamos
usar a url: http://localhost:3333/users já que é esse o
caminho apontado na requisição. (/users):
*/

//Fazendo uma requisição GET/List:
app.get("/users", (request, response) => {
  return response.json(["User1", "User2"]);
});

//Fazendo uma requisição POST/Create:
app.post("/users", (request, response) => {
  return response.json({ message: "Creating user..." });
});

//Fazendo uma requisição PUT/Update:
app.put("/users", (request, response) => {
  return response.json({ message: "Updating user..." });
});

//Fazendo uma requisição DELETE:
app.delete("/users", (request, response) => {
  return response.json({ message: "Deleting user..." });
});
