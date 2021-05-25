<template>
  <!--Criando um evento customizado, usamos a sintaxe:
  "$emit('NomeEvento', 'Dados/MétodosQueExecutamNoEvento')"
  --->
  <button
    class="button-styled"
    @click="$emit('eventoCustom', 'StringDeEventoCustomExecutada🤩😎')"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
//Usamos o PropType pra definir props não simples (objetos ou arrays):
import { defineComponent, PropType } from "vue";

//Cria a tipagem de tipo color usada no "validator", no objeto props, aqui embaixo:
type color = "success" | "danger" | "primary";

//Interface para o prop não simples "user", usada no objeto props, tbm aqui embaixo:
interface User {
  nome: string;
}

export default defineComponent({
  //Aqui ficam as propriedades aplicáveis para esse componente:
  props: {
    //Tal componente tem a propriedade obrigatória:
    text: {
      //Com os tipos:
      type: [String, Number],
      //Se a prop é obrigatória:
      required: true,
    },
    //Tal componente pode ter a propriedade:
    color: {
      //Com o tipo:
      type: String,
      //Com o valor padrão:
      default: "primary",
      //Aceita apenas os valores que puxamos de: "color":
      validator: (value: color) => {
        return ["success", "danger", "primary"].includes(value);
      },
    },
    //Tal componente pode ter a propriedade:
    user: {
      //Com o tipo de propriedade complexa (array ou objeto):
      type: Object as PropType<User>,
      //Se essa prop fosse do tipo array -> <NomeProp[]>,

      //Se a prop é obrigatória:
      required: false,
    },
  },
});
</script>

<style scoped>
.props-button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}

.success {
  background-color: green;
  /*Adiciona um efeito de glow: */
  box-shadow: 0 0 5px 3px rgba(76, 234, 45, 0.3);
}

.danger {
  background-color: red;
  /*Adiciona um efeito de glow: */
  box-shadow: 0 0 5px 3px rgba(234, 45, 45, 0.3);
}
/*Como estamos usando o css global na pasta "public",
a classe dinâmica primary fica obtem as propriedades do css global.
Agora caso você não esteja utilizando o css global, a dynamicClass primary
teria as props:

.primary {
  background-color: #2d6cea;
  box-shadow: 0 0 5px 3px rgba(45, 108, 234, 0.3);
}
*/
</style>
