<template>
  <div align="center">
    <h1>{{ count }}</h1>

    <button @click="count++">Incrementar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  /*Acontece ANTES da atualização de dados no componente - Tem acesso aos dados e DOM.
  Se quisermos fazer ANTES de algum dado ser alterado, usamos o beforeUpdate:*/
  beforeUpdate() {
    console.log("Antes update");
  },
  /*Acontece AO MSM TEMPO da atualização de dados no componente - Tem acesso aos dados e DOM.
  Se quisermos realizar um ação depois da atualização dos dados, usamos o updated:*/
  updated() {
    console.log("Dps update");
  },
});
</script>
