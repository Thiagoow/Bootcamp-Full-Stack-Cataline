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

<style scoped>
body {
  background: #fff;
}
h1 {
  width: 20rem;
}
</style>
