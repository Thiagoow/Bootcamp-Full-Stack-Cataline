/*
O TypeUnion nos permite atribuir mais de um valor
ou parâmetro, para uma variável, ou uma função,
respectivamente. Utilizando o caractere "|".
*/

//--------Exemplo 1:
//Idade podendo ser definida como número ou string:
let age: number | string;
age = 20;
age = "vinte";

//--------Exemplo 2:
//Função de pet, onde pet só pode ser cachorro, ou gato:
function showPet(pet: "dog" | "cat") {
  console.log(pet);
}

showPet("cat");
