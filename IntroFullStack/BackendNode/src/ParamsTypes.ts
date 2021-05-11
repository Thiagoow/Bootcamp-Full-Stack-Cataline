import express, { request, response } from "express";

const app = express();

/*
Os 3 tipos de parâmetros mais utilizados são:

Query Params -> Filtra infos de uma requisição;
Route Params ->
Request Body -> 
*/

//------------PRA EXECUTAR, COLOCA OS COMANDOS A PARTIR DAQUI NO SERVER.TS---------------//
//-----(Ou muda o atalho no "dev" do package.json de server.ts pra NomeDesseArquivo.ts)

/*-------------------------------1-Exemplo Query:
Definimos esses queryParams na nossa 
requisição get utilizando o Insomnia:
    perPage = 3
    page = 1
Testemos agr pra ver se funcionou 
(realizando a requisição get no Insomnia):
*/
app.get("/users", (request, response) => {
  //Informação estruturada(Quando não sei muito qual resposta eu quero):
  const query = request.query;
  console.log(query);

  //Informação desestruturada a (Quando eu sei muito bem qual resposta eu quero):
  const { perPage, page } = request.query;
  console.log(`UsersPorPág:`, perPage, `,`, `Pág:`, page);
  return response.json("FUNCIONOU!! Confira o console.log do seu Vs Code! 😁");
});

/*-----------------------------2-Exemplo Route:
Com o "/:" no caminho, definimos o route param, colocando após
ele, o nome do parâmetro que queremos manipular, nesse caso (:/id)

(Pra testar no insomnia use a URL: http://localhost:3333/users/NumeroX)
*/
app.put("/users/:id", (request, response) => {
  //Informação estruturada:
  const params = request.params;
  console.log(params);

  //Informação desestruturada:
  const { id } = request.params;
  console.log(`Teu UserId é: `, id);
  return response.json({ message: "Updating user..." });
});

/*-------------------------------3-Exemplo Request Body:
Criamos o seguinte Request Body no Insomnia:

    {
        "name": "Thiago Silva Lopes",
        "email": "emailtest@email.com",
        "age": 18
    }

Agora, testamos com o express no modo json(), e
fazemos a requisição post no Insomnia:*/

//Requisição Post/Create:
app.post("/users", (request, response) => {
  //Info estruturada:
  const body = request.body;
  console.log(body);

  //Info desestruturada:
  const { name, age } = request.body;
  console.log(`Seu nome é:`, name, `, e você tem:`, age, `anos.`);
  return response.json({ message: "Creating user..." });
});

/* A REQUISIÇÃO DARÁ ERRADO CASO O SERVER.TS NÃO TENHA O ATIVADO 
O MODO JSON():

    //Define pro express que ele usará o arquivo json:
    app.use(express.json());

ENTÃO, É NECESSÁRIO COLOCA-LO ANTES DO "const app = express()"
OU DO CONTRÁRIO ------------NÃO VAI FUNCIONAR!!!-----------------
*/
