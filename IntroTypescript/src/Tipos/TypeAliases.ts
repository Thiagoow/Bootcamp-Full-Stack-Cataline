/*

TypeAliases --> Tipo e apelido.

Ao invés de colocar todos os animais como
parâmetros da função pets, criamos o type,
e definimos os apelidos:
*/

type Pet = "dog" | "cat" | "hamster" | "turtle";

function ShowPet(pet: Pet) {
  console.log(pet);
}

ShowPet("cat");
