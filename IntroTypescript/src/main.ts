console.log("Hello World :D");

//Tentando importar o arquivo .js:
import { sum } from "./calculator.js";
/*
Se deu certo, e não erro nesse arquivo,
o "allowJs" do tsconfig.json,está descomentado 
e definido como "true". 😉
*/

console.log(sum(5, 5));
/*
Porém, como o calculator é do tipo .js,
a função "sum" tem suas vars como padrão
do tipo "any". Por causa da tipagem dinâmica.

Oq significa que, se colocarmos os números com ""
(duas strings), a função irá CONCATENÁ-LOS,
invés de realmente somar.

Para impedir isso, não tem jeito, ou declaramos as
vars no próprio arquivo Js, ou transformamos ele pra
Ts, declarando todas as variáveis também. Para evitar
esses erros.
*/
