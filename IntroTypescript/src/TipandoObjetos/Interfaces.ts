/*
Utilizamos para criar e atribuir 
o tipo dos atributos de um objeto.
*/

//EXEMPLO: Função de mostrar a cidade e estado (uf) do usuário:

//Jeito certo com as interfaces (e type):
type Uf = "PE" | "SP" | "MG";
type City = "São Paulo" | "Rio de Janeiro";

interface User {
  name: string;
  address: {
    city: City;
    UF: Uf;
  };
  sex?: "M" | "F" | "Outro";
}

function showUF(user: User) {
  return (user.address.UF = "SP");
}

function showCity(user: User) {
  return (user.address.city = "São Paulo");
}

/*
Jeito ERRADO e verboso, sem interface:

//Função de mostrar cidade:
function showCity(user: {name: string; address: {city: "São Paulo" | "Rio de Janeiro"}}) {
  return (user.address.city = "São Paulo");
}

//Função de mostrar estado:
function showUF(user: {name: string; address: {UF: "PE" | "SP" | "MG"}}) {
  return (user.address.UF = "SP");
}
*/
