<template>
  <!--Usamos componentes dinâmicos para fazer roteamento de páginas nesse exemplo.
  PORÉM, contudo, TODAVIA-> Não é assim que funciona o route para páginas com Vue.
  Como ele é muito difícil, e nem precisaremos desse recurso agora, aprenderemos sobre
  esse assunto apenas no curso de Nuxt.js, onde isso se torna muito mais fácil.-->
  <div class="centralizar" align="center">
    <ul>
      <li @click="paginaAtual = 'Home'">Home</li>
      <li @click="paginaAtual = 'About'">Sobre</li>
      <li @click="paginaAtual = 'Contact'">Contato</li>
    </ul>
    <component :is="paginaAtual" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Home from "@/components/html/Home.vue";
import About from "@/components/html/Sobre.vue";
import Contact from "@/components/html/Contato.vue";

export default defineComponent({
  components: { Home, About, Contact },
  data() {
    return {
      paginaAtual: "Home"
    };
  }
});
</script>

<style scoped>
.centralizar {
  line-height: 1.5rem;
  /*Centralizar -- e | -> 
  align="center" na div +:
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);*/

  /*Centralizar horizontalmente,
  mas na mesma linha -> flexbox:;
  display: flex;
  align-items: center;
  justify-content: center;*/

  /*Centrailizar horizontalmente, mas 
  NÃO na mesma linha -> grid layout:*/
  display: grid;
  place-items: center;

  /*Centralizar verticalmente: 
  position: absolute;
  top: 50%;
  transform: translateY(-50%);*/
}
</style>
