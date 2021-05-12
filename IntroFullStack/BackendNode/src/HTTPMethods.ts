/*-----------São os principais HTTP CODES:
100 -> Informativos
200 -> Sucesso
  200 = Ok - Com sucesso e resposta
  201 = Criado - Com sucesso, mas sem resposta

300 -> Redirecionamento
  301 = Movido permanentemente
  302 = Movido temporariamente

400 -> Erros do cliente/usuário:
  400 = Bad request - Você fez a requisição incorretamente
  401 = Requisição não autorizado pra você
  404 = Requisição não encontrada

500 -> Erros internos do servidor
*/

import express, { response } from "express";

//------------PRA EXECUTAR, COLOCA OS COMANDOS A PARTIR DAQUI NO SERVER.TS---------------//
//-----(Ou muda o atalho no "dev" do package.json de server.ts pra NomeDesseArquivo.ts)

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

//Fazendo uma requisição GET:
app.get("/users", (request, response) => {
  return response.json(["User1", "User2"]);
});

//Fazendo uma requisição POST:
app.post("/users", (request, response) => {
  return response.json({ message: "Creating user..." });
});

//Fazendo uma requisição PUT:
app.put("/users", (request, response) => {
  return response.json({ message: "Updating user..." });
});

//Fazendo uma requisição DELETE:
app.delete("/users", (request, response) => {
  return response.json({ message: "Deleting user..." });
});

/*
Pra fazer a requisição do tipo GET, basta executar o comando
"npm run dev", e acessar o link no browser do seu:
  
  localhost/portaAppListen/OndeFazRequisição

Sendo nesse caso:
http://localhost:3333/users
*/
