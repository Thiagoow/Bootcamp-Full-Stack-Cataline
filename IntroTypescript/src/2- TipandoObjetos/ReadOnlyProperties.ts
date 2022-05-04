/*
readonly (Apenas leitura): Torna atributos de variáveis imutáveis.

Diferentemente do "const", que torna o nome da variável imutável 
fora do escopo local (global), mas não seus atributos/propriedades.
*/

interface Pessoa {
  name: string;
  readonly age: number;
}

const pessoa1: Pessoa = {
  name: "Thiago Silva",
  age: 18
};

//Tentando mudar os valores dos atributos da pessoa1:
//pessoa1.age = 23;
//A idade eu não vou conseguir, pois é apenas leitura.

pessoa1.name = "Roberto Pereira";
/*
Já o nome eu consigo, pois não foi atribuído como "readonly".

Além disso, ainda que a variável pessoa1 tenha sido definida como "const",
ela é um objeto. O que significa que não podemos alterar o nome dela. Mas os seus
atributos/propriedades sim, nós podemos.
*/

//Exibindo o objeto pessoa1 pra ver se alterou:
console.log(pessoa1);
