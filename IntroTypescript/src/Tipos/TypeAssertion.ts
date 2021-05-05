/*
TypeAssertion/Afirmação de Tipos --> Usamos quando queremos
fazer algo além do conhecido pelo Ts. Como por exemplo:
*/

//Damos ao elemento selecionado, que ele é do tipo HTMLInputElement.
const inputName = document.querySelector("#name") as HTMLInputElement;
inputName.value;
/*
Do contrário, se não temos o: "as HTMLInputElement",
o Ts não nos permite utilizar o atributo "value".
*/
