/*
Tudo que instalamos com o npm é teoricamente
Javascript. Então, como funcionam as dependências?

Na axios por exemplo, vamos instalar com:
    npm i axios
Que ja conhecemos bem, é um pacote para fazer 
requisições HTTP.
*/
import axios from "axios";
axios.get("/PastinhaShow", {});
/*
Importando essa biblioteca, notamos que a Axios
já tem a tipagem funcionando por padrão. Ok, mas
e quando alguma biblioteca não? :/ Nesse caso, usamos o comando:
    npm i @types/nomeBiblioteca -D

Vamos usar como exemplo a biblioteca "simplebar"
com o comando:
    npm i simplebar

A qual essa biblioteca, pega a barra de rolagem de algum elemento
HTML, e aplica um efeito via Js.
*/

//Letra maiúscula pq é uma classe:
import Simplebar from "simplebar";
/*
Nesse caso, vemos que dá erro, pois ela foi feita
apenas para Js. Nesse caso, usamos o comando:
    npm i @types/simplebar -D
*/
const content = document.querySelector("#content") as HTMLElement;

const simplebar = new Simplebar(content, { autoHide: false });
/*Sendo assim conseguimos utilizar a dependência, 
mesmo sendo suportada apenas pra Js. E essa "mágica",
se dá pelo fato que o Ts é convertido para Js quando
executado/debugado 😎*/

/*
AGORA, SE A BIBLIOTECA NÃO POSSUI UM PACOTE DE TIPOS, NÃO PODEMOS
INSTALAR ELA COM O COMANDO: npm i @types/nomeBiblioteca -D
---------------------------NESSE CASO:---------------------------
Criamos uma variável const de nome x, que requer a biblioteca sem
pacote de tipos. Assim:
    const bibSemTipo = require("nomeBiblioteca")

Se o require der erro, instalamos o "npm i @types/node -D" (sem aspas)
porque ele não vai estar instalado.

--------------------AGORA, SE MESMO ASSIM DER ERRO:--------------
MDS ASSUAHSA, TU QUER MESMO USAR ESSE BIBLIOTECA HEIN?)

Criamos um arquivo "global.d.ts" na pasta "src", tendo esse arquivo, o seguinte conteúdo:
    declare module "nomeBiblioteca"

Declarando então, que isso é um módulo Js. E todo módulo Js no Ts, é definido como "any"
(Sem tipo/Tipagem automática/Tipagem dinâmica).

Usando depois, nosso modulo da biblioteca, com o import:
    import bibSemTipo from "nomeBiblioteca"
*/
