import express, { json, request, response } from "express";
/*Importa o microframework express,
pra criarmos o mini servidor com Node.js,
após ele ser instalado com os comandos:

    npm i express
    (instala o express)

    npm i @types/express -D
    (Usado para podermos usa-lo junto com o Ts)
*/
import cors from "cors";
/*
Instalado com:
  npm i cors
E tipagens do Ts:
  npm i @types/cors
*/
import { v4 as uuid } from "uuid";
/*Importamos aqui o UUID - Universal and Unique ID.
  Sendo necessário instala-lo -ANTES!-, com os comandos:
    npm i uuid
  E o comando de types (pois estamos usando Ts):
    npm i @types/uuid -D
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
//Define com o cors que todas as aplicações poderão fazer requisições para esse backend:
app.use(cors({ origin: "*" }));

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

interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [];
/*Essa var vai ser como nosso Db temporário
(Oq nunca devemos fazer num projeto verdadeiro,
já que quando desligado, todos os dados que forem
inseridos aqui pelas requisições serão DELETADOS)
*/

//1- Fazendo uma requisição GET/List:
app.get("/users", (request, response) => {
  /*1º: Buscar na dB;
  Não é necessário nesse caso, buscar pra ver se 
  o User já existe na dB, pq nesse projeto não há Db*/

  //2º: Retornar os usuários existentes:
  return response.json(users);
});

//2- Fazendo uma requisição POST/Create:
app.post("/users", (request, response) => {
  //1º: Puxamos as infos do usuário (menos o ID, pois é criado automaticamente):
  const { name, email } = request.body;

  //2º: Criamos um novo usuário com o uuid:
  const user = { id: uuid(), name, email };

  //3º: Inserimos o usuário criado no dB:
  users.push(user);

  //4º: Retornamos os dados do novo user:
  return response.json(user);
});

//3- Fazendo uma requisição PUT/Update (pelo id):
app.put("/users/:id", (request, response) => {
  //1º: Recebemos TODOS os dados do user (até o id):
  const { id } = request.params;
  const { name, email } = request.body;

  //2º: Localizamos o index (id) do user na dB:
  const userIndex = users.findIndex((user) => user.id === id);

  //3º: Se o user não existir não dB retornamos um erro:
  if (userIndex < 0) {
    return response.status(404).json({ error: "Usuário não encontrado 😕" });
  }

  //4º: Se o user existir, atualizamos ele na dB:
  const user = { id, name, email };
  users[userIndex] = user;

  //5º: Retornamos os dados do user atualizado:
  return response.json(user);
});

//4- Fazendo uma requisição DELETE:
app.delete("/users/:id", (request, response) => {
  //1º: Localizamos o user na dB pelo id:
  const { id } = request.params;

  //2º: Localizamos o index (id) do user na dB:
  const userIndex = users.findIndex((user) => user.id === id);

  //3º: Se o user não existir não dB retornamos um erro:
  if (userIndex < 0) {
    return response.status(404).json({ error: "Usuário não encontrado 😕" });
  }

  //4: Se o user existir excluímos ele na dB:
  users.splice(userIndex, 1);

  //5º: Retorna o status 204(sem conteúdo) que deu certo a exclusão do user:
  return response.status(204).send();
});

//------------------Como testar no Insomnia (ou PostMan) as requisições acima----------------------------

//1 GET/List- Apenas usamos a url: http://localhost:3333/users

/*2 (POST/Create)- Use a url da request 1 e coloque no Body:
{
	"name": "Thiago Silva Lopes",
	"email": "emailtest@email.com",
	"age": 18
}
*/

/*4 (DELETE)- Use a url da request 1/o id de um usuário:
  {{ _.baseURL }}/users/ColocaAqui
*/

/*3 (PUT/Update)- Use a url da request 1/o id de um usuário e coloque no Body:
{
	"name": "Roberto (antes Thiago Silva Lopes)",
	"email": "email (antes emailtest@email.com)",
	"age": 19
}
*/
