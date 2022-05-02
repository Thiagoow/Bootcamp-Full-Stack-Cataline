<template>
  <div align="center">
    <h1>{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "Hello World ツ"
    };
  },

  /*Acontece ANTES da montagem da DOM (elementos HTML e CSS) - Tem acesso apenas aos dados.
  Se quisermos fazer ANTES da DOM ser montada, usamos o beforeMount:*/
  beforeMount() {
    console.log(this.$el);
    /*Se tentar acessar um elemento que ainda não existe,
    como nesse caso, a resposta retornada é "null"*/
  },

  /*Acontece AO MSM TEMPO com a montagem da DOM (elementos HTML e CSS) - Tem acesso aos dados e a DOM. 
  Se quisermos manipular a DOM o mais cedo possível, usamos o mounted:*/
  mounted() {
    this.$el.style.background = "red";
    console.log(this.$el);
  }
});
</script>
