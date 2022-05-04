/*
Os chamados decoradores, são oq decoram
nosso Ts, alguma coisa a mais, que acrescenta
algum tipo de funcionalidade.

Para usa-los, descomentamos a linha:
    "experimentalDecorators": true,
No tsconfig.json. Conferindo se tá como true :p

E temos aqui nosso decorator em forma padrão:

    function nomeDecorator(target: any) {
    console.log(target);
    }

Para usar o decorator (não precisamos colocar ;):
    @nomeDecorator
*/

//Decorator com parâmetros, para mostrar a versão da API:
function setApiVersion(ApiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = ApiVersion;
    };
  };
}

//Exporta o decorator pra usarmos no ../main.ts 😎:
export { setApiVersion };
