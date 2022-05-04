//Tipagens: any, void e never:

/*
any --> tipagem automática/dinâmica (igual ao Js) pra alguma variável;

void --> tipagem vazia, que só recebe "undefined", sendo usada geralmente
para retornar uma função que apenas realiza uma ação, mas não retorna nada;

never --> tipagem vazia, que não recebe NADA, nem "undefined", nem "null". Só
usamos ele APENAS, quando temos uma função com loop infinito, ou uma exceção,
tipo uma função de erro.

EXEMPLOS:
*/

//----------------any:
//Recebeu um valor numérico
let dynamic: any = 89;
//Recebeu uma string:
dynamic = "Eae :D eu sou um Ts com tipagem dinâmica :p";
//Mostra a var:
console.log(dynamic);

//---------------void:
//Função com parâmetro "name", e valor default "fulano"
function showSomethingWithoutReturn(name: string = "Fulano"): void {
  console.log(name);
}
//Executa a função:
showSomethingWithoutReturn();

//--------------never:
function error(): never {
  throw new Error("error");
}
//Executa a função:
error();
