<template>
  <div class="centralizar" align="center">
    <ul>
      <li @click="paginaAtual = 'Home'">Home</li>
      <li @click="paginaAtual = 'About'">Sobre</li>
      <li @click="paginaAtual = 'Contact'">Contato</li>
    </ul>

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
      <component :is="paginaAtual" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import "animate.css";
import Home from "@/components/html/Home.vue";
import About from "@/components/html/Sobre.vue";
import Contact from "@/components/html/Contato.vue";

export default defineComponent({
  components: { Home, About, Contact },

  data() {
    return {
      show: true,
      paginaAtual: "Home"
    };
  }
});
</script>

<style scoped>
.centralizar {
  line-height: 1.5rem;
}
</style>
