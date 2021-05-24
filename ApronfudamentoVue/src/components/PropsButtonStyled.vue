<template>
  <!--Classe dinâmica com o "v-bind"/":"--->
  <button :class="['props-button-styled', color]">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//Cria a tipagem de tipo color usada no "validator", no objeto props, aqui embaixo:
type color = "success" | "danger" | "primary";

export default defineComponent({
  //Aqui ficam as propriedades aplicáveis para esse componente:
  props: {
    //Tal componente pode ter a propriedade:
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
