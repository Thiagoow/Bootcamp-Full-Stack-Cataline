//Define um atributo como opcional, ou seja, pode ou não existir.

//----------------------------------EXEMPLO 1:
interface User {
  name: string;
  address: {
    city: City;
    UF: Uf;
  };
  //sexo do usuário é opcional:
  sex?: "M" | "F" | "Outro";
}

function showSex(user: User) {
  return user.sex ? user.sex : "Não definido pelo usuário";
}
console.log(showSex);

//Ou, sem tratativa de erro (caso não exista, vai retornar undefined):

/*
function showSex(user: User) {
return user?.sex;
}
console.log(showSex);
*/

//----------------------------------EXEMPLO 2:
interface Usuário {
  name: string;
  address: {
    //Cidade opcional
    city?: City;
    UF: Uf;
  };
  sex: "M" | "F" | "Outro";
}

function showCidade(user: Usuário) {
  return user.address ? user.address.city : "Não definido pelo usuário";
}
//Vai retornar a cidade, ou caso ela não exista, retorna a tratativa de erro.
console.log(showCidade);

//Ou, sem tratativa de erro (caso não exista, vai retornar undefined):

/*
function showCity(user: Usuário) {
return user.address?.city;
}
console.log(showCity);
*/
