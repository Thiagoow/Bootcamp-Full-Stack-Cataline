<template>
  <div class="centralizar" align="center">
    <button @click="show = !show">Toogle</button>

    <transition
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__zoomOutUp"
      appear
      mode="out-in"
    >
      <!--Se não há a propriedade "mode=" acima, a animação fica bugada.
      Aceitando essa prop, apenas os valores in-out, ou out-in. Sendo:
      
      in-out -> Novo elemento realiza a transição de entrada primeiro; 
      quando completada, o elemento atual realiza a transição de saída.

      out-in -> Elemento atual realiza a transição de saída primeiro;
      quando completada, o novo elemento realiza a transição de entrada.
      -->
      <h1 v-if="show">Front-end 🎨📏</h1>
      <h1 v-else>Back-end 👨🏻‍💻📡</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "animate.css";

export default defineComponent({
  data() {
    return {
      show: true,
    };
  },
});
</script>

<style scoped></style>
