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
invés de realmente somar. Veja:
*/
console.log(sum("5", "5"));
/*
Para impedir isso, não tem jeito, ou declaramos as
vars no próprio arquivo Js, ou transformamos ele pra
Ts (apenas mudando sua extensão (.js pra .ts)), mas também
declarando todas as variáveis. Para evitar esses erros.
*/

//--------------------Usado no ./controllers:--------------------
import users from "@/controllers/http/Users";

users();
/*
Se der erro, é por que o Ts não está sendo usado
como ambiente de dev, lá no package.json. Nesse caso:
    npm i tsconfig-paths -D

E adicionando também, no "dev" do package.json, entre
o primeiro e segundo comando:
    -r tsconfig-paths/register

E ele vai funcionar 😊😎, exibindo a função users(), no
console.log.
*/

//------Utilizado no ./Utilidades&Extras/Decorators.txt-----------
//Importamos nosso decorator:
import { setApiVersion } from "@/Utilidades&Extras/Decorators";

//Para usar o decorador (não precisamos colocar ";"):
@setApiVersion("A versão da api é: 1.0 🤩😎")
class API {}

//Mostra no console.log uma nova classe API:
console.log(new API());
