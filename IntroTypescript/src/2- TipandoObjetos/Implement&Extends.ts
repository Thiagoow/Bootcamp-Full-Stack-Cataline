/*
extends --> Quando queremos unir duas interfaces;

implements -> Quando queremos criar uma classe, a partir
de uma interface.
*/

interface Veículo {
  rodas: number;
  acelerar: () => void;
  frear: () => void;
}

//---------------------Exemplo extends:
/* Utilizando o extends para dar a interface
moveTo, os atributos da interface Veículo. */
interface Moto extends Veículo {
  capacete: boolean;
  empinar: () => void;
}

let hornet: Moto;
/*
Graças ao extends, agora a variável
que recebe a interface moto, pode 
acelerar, algo antes presente apenas,
se a var recebesse a interface Veículo.

hornet.acelerar;
*/

//---------------------Exemplo implement:
//Criando a classe a partir da interface:
class CriarVeículo implements Veículo {
  rodas: number;

  constructor(rodas: number) {
    this.rodas = rodas;
  }
  acelerar() {
    console.log("Acelerou!");
  }
  frear() {
    console.log("Freou!");
  }
}
