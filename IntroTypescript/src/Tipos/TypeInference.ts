//Tem como função, evitar a redundância no código.

//----------Exemplo 1:

/*
Não precisamos definir a variável
quando já atribuímos a ela um valor,
pois o typescript já analisa qual valor
foi atribuído à var. Sendo assim, definimos
a var apenas assim:
*/
let message = "Cataline";

/*
E não assim:
let message: string = "Cataline";
*/

//----------Exemplo 2:

window.addEventListener("click", (event) => {
  console.log(event.target);
});
/*
Nesse exemplo, não precisamos definir o tipo de
evento o qual pertence a função. Pois o ts já 
sabe que 'click' é um evento de mouse. Nos poupando
de definir o evento assim:

window.addEventListener("click", (event: MouseEvent) => {
  console.log(event.target);
});

Pois, quando passamos o mouse em cima do (event),
notamos que o ts, de fato sabe que é um MouseEvent. 
*/

//----------Exemplo 3:

window.addEventListener("keypress", (event) => {
  console.log(event.target);
});
/*
O ts já sabe que o evento é de KeyboardEvent, pois
"keypress" é um evento de Keyboard. Nos poupando de
defini-lo:

window.addEventListener("click", (event: KeyboardEvent) => {
  console.log(event.target);
});
*/

//Sendo assim, definimos o tipo de evento, apenas quando o Ts falhar 😎
