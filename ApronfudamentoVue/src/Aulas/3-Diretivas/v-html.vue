<template>
  <div align="center">
    <!--"v-html" -> Converte string pra HTML, sem a interpolação. Mas funciona APENAS
    numa tag VAZIA, nesse caso, uma <span></span>-->
    <p>Acesse: <span v-html="url"></span></p>
    <!--Se tentássemos usar a interpolação: {{url}}, a var apareceria apenas
    como string, texto normal, e não código HTML.-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      url: '<a href="http://loja.com/produto/12345">Lojinho</a>'
    };
  }
});
</script>

<style scoped>
/* */
</style>
