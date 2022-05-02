<template>
  <div align="center">
    <h1>{{ count }}</h1>

    <button @click="destroyComponent">Destruir componentes</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0
    };
  },

  /*Acontece ANTES da desmontagem de dados e DOM no componente - Tem acesso aos dados e DOM.
  Se quisermos fazer ANTES da desmontagem, usamos o beforeUnmount:*/
  beforeUnmount() {
    console.log("Os componentes serão desmontados...");
  },
  /*Acontece AO MSM TEMPO da desmontagem de dados e DOM no componente - Não tem acesso a nada, pois não 
  tem mais nada criado. Se quisermos realizar um ação depois da desmontagem, usamos o unmounted:*/
  unmounted() {
    alert("Componentes desmontados com sucesso 😎");
    console.log("Os componentes foram desmontados! :)");
  },
  methods: {
    destroyComponent() {
      this.$.appContext.app.unmount();
    }
  }
});
</script>

<style scoped>
h1 {
  font-family: "JetBrains Mono";
}
</style>
