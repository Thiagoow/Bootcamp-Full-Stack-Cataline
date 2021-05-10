/*Importa o microframework express,
pra criarmos o mini servidor com Node.js,
após ele ser instalado com os comandos:

    npm i express
    (instala o express)

    npm i @types/express -D
    (Usado para podermos usa-lo junto com o Ts)
*/
import express from "express";

console.log("Hello World :)");
/*Dando um console.log pra ver se o Ts
foi instalado corretamente, após os comandos:
    
    npm i typescript ts-node-dev -D
    (instala o Ts e o ts-node-dev 
    como dev dependency)

    npx tsc --init
    (Cria o tsconfig.json)
*/

//Método que vai construir meu app:
const app = express();
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
