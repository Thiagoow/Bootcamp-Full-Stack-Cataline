<template>
  <!--A classe estática pode ser misturada com uma classe dinâmica sem problemas.
Usamos a classe dinâmica para quando quisermos altera-la a partir de uma condição ou
por exemplo:-->
  <h1 :class="['classeEstática', { taAtiva: isActive }, className]">
    <!--Insere a classe dinÂmica "ativa" :(se for) isActiver: true, e a string
    presente em "className", sem condicional, e sem ser dinâmica ツ-->
    Hello Worldツ
  </h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: true,
      className: "NomeClasseNãoUmaVar",
    };
  },
});
</script>

<style scoped></style>
