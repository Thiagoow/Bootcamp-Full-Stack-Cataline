<template>
  <!--É nessa tag que ficam os códigos HTML com Vue:-->

  <h1>Hello World :D</h1>
  <Header />
  <!--Importamos aqui nosso componente de outro arquivo Vue
  (componentização), e isso nos permite usar esse mesmo componente
  quantas vezes quisermos-->
</template>

<script lang="ts">
//É nessa tag que ficam os códigos Js com Vue:

import { defineComponent } from "vue";
//Importando um componente Vue de outro aruivo Vue (Componentização):
import Header from "@/components/Header.vue";

export default defineComponent({
  //Importa o componente Header do Header.vue:
  components: { Header },
  data() {
    return {
      name: "Cataline",
    };
  },
});
</script>

<style scoped>
/*É nessa tag que ficam os códigos CSS com Vue:*/
</style>
