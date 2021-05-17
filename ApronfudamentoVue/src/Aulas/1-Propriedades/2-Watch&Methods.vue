<template>
  <div align="center">
    <h1>{{ count }}</h1>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Resetar</button>
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
  //Onde ficam nossas funções/métodos:
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
  /*watch - Observa algum do nosso projeto e executa alguma ação.
  Colocando dentro da watch o: nomeDado() { //Ação }*/
  watch: {
    count(newValue, oldValue) {
      console.log("Valor antigo da var Count: " + oldValue);
      console.log("Novo valor da var Count: " + newValue);
      //Para ver esse código funcionando, abre o console do navegador
    },
  },
});
</script>
