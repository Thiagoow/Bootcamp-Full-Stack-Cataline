<template>
  <!--A classe estática pode ser misturada com uma classe dinâmica sem problemas.
Usamos a classe dinâmica para quando quisermos altera-la a partir de uma condição ou
por exemplo:-->
  <h1 class="classeEstática" :class="{ taAtiva: isActive, temErro: hasError }">
    <!--Insere a classe dinâmica "ativa" :(se for) true, e a classe dinâmica "temErro" :(se) hasError é true-->
    Hello Worldツ
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: true
    };
  }
});
</script>

<style scoped></style>
