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
      message: "Hello World ツ",
    };
  },
  /*Acontece ANTES do inicialização e watch dos componentes- Não tem acesso a nada, não tem nada criado ainda.
  Se quisermos fazer ANTES dos componentes serem criados, usamos o beforeCreate:*/
  beforeCreate() {
    console.log(this.message);
    /*Se tentar acessar um dado que ainda não existe,
    como nesse caso, a respota retornada é "undefined"*/
  },
  /*Acontece AO MSM TEMPO que a inicialização e watch do component- Tem acesso aos dados do app.
  Se quisermos manipular os componentes o mais cedo possível, usamos o created:*/
  created() {
    console.log(this.message);
  },
});
</script>
