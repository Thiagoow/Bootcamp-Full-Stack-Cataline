/*
TypeAliases --> Tipo e apelido.

Ao invés de colocar todos os animais como
parâmetros da função pets, criamos o type,
e definimos os apelidos: */

type Pet = "dog" | "cat" | "hamster" | "turtle";
//Useful in other functions that have the same Params
function ShowPet(pet: Pet) {
  console.log(pet);
}

/* Way better than define like:
function ShowPet(pet: "dog" | "cat" | "hamster" | "turtle") {
  console.log(pet);
}
*/

ShowPet("cat");
