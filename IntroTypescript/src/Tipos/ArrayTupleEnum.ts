/*
tuple --> quando sabemos qual o tamanho de uma array, 
e quais vão ser os seus tipos. Podendo haver vários tipos !=,
e quantos eu quiser. Mas eu preciso saber o tamanho MÁXIMO da array;

enum --> cria um conjunto de chaves e valores, como um objeto,
se diferenciando por atribuírmos o valor dessas chaves com "=",
e não "=" como atribuímos os valors um objeto.

*/

//1------------ Definindo uma array, do jeito mais popular:
let items: number[];

/*
Ou, do jeito mais diferentão, 
usa esse não, não precisa 🤨:

    let items: Array<number>;
*/
items = [1, 2, 3, 4];
console.log(items);

//2-------------- Definindo uma array com tuple:
let items1: [number, string, boolean];
items1 = [1, "Thiago", true];
console.log(items1);

//3---------------- Definindo uma array com enum:
//Temos um enum de paleta de cores:
enum Colors {
  white = "#fff",
  black = "#000",
}
//Caso eu queira saber o hexadecimal de uma das cores:
let white: Colors = Colors.white;
console.log(white);
