<template>
  <div align="center">
    <h1 v-diretiva:background.shadow="'blue'">Hello Worldツ</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  /*Definimos a diretiva personalizada aqui:
  directives: {
    diretiva: {},
  },*/
});
</script>

<style>
/*Se tiver como scoped, não vai alterar os dados definidos pelo 
css global, importado no main.ts*/
body {
  background: #fff;
}
h1 {
  width: 20rem;
}
</style>
