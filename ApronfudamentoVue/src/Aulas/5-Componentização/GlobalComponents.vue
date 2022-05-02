<template>
  <div class="centralizar" align="center">
    <!--Importado globalmente no main.ts:-->
    <IdComponenteGlobal text="Botãoツ" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

/*Se ele estivesse importado localmente:
import GlobalButtonStyled from "@/components/GlobalButtonStyled.vue";
*/
export default defineComponent({});
</script>

<style scoped>
.centralizar {
  /*Centralizar -- e | -> 
  align="center" na div +:
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);*/

  /*Centralizar horizontalmente,
  mas na mesma linha -> flexbox:;*/
  display: flex;
  align-items: center;
  justify-content: center;

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
