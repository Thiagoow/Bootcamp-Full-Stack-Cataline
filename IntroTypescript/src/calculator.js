const sum = (a, b) => a + b;

//Exporta a função, declarando nela mesma o comando export:
const subtraction = (a, b) => a - b;

//Exporta do jeito principal, a função pra usarmos no main.js:
export { sum, subtraction };

/*
Havendo também a possibilidade de criar uma função 
anônima/sem nome, utilizando o comando "default":

    export default (a, b) => a + b;

Importando ela depois, com o nome que eu quiser:

    import funçãoExportadaPadrão from "ondeTaFunção.js"
*/
