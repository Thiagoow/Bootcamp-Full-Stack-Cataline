<template>
  <div class="centralizar" align="center">
    <SlotsButtonStyled>
      <!--Quando um slot possui nome, ou o componente possui um ícone,
      envolvemos o componente/ícone numa tag template, com o "v-slot:slotName"-->
      <template v-slot:before>
        <i class="fab fa-facebook-f"></i>
        Facebook
      </template>
      <!--A posição do slot, é definida no componente pai. 
      Nesse caso, o: "SlotsButtonStyled.vue"-->
      <template v-slot:after>
        <i class="fab fa-facebook-square"></i>
      </template>
    </SlotsButtonStyled>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SlotsButtonStyled from "@/components/SlotsButtonStyled.vue";

export default defineComponent({
  components: {
    SlotsButtonStyled,
  },
});
</script>

<style scoped>
.centralizar {
  /*Centralizar -- e | -> align="center" na div +:*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /*Centralizar horizontalmente,
  mas na mesma linha -> flexbox:
  display: flex;
  align-items: center;
  justify-content: center;*/

  /*Centrailizar horizontalmente, mas 
  NÃO na mesma linha -> grid layout:
  display: grid;
  place-items: center;*/

  /*Centralizar verticalmente: 
  position: absolute;
  top: 50%;
  transform: translateY(-50%);*/
}
</style>
