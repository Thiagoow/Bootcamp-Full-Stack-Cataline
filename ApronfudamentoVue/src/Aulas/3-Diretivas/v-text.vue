<template>
  <div align="center">
    <p>{{ company }} é legal :D</p>

    <!--"v-text=" -> Associa dado de texto do nosso data(), pra tag template 
      mas dentro de atributos HTML, ou seja, sem a interpolação {{}}.-->

    <p v-text="company">
      <!--Não deixa eu escrever é legal :c, senão dá erro-->
    </p>

    <!--A diferença do v-text pra interpolação, é que ele não permite alterações do texto,
    já a interpolação sim-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      company: "Pixar"
    };
  }
});
</script>

<style scoped>
/* */
</style>
