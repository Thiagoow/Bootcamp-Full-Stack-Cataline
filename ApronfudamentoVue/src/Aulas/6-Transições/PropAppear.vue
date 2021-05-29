<template>
  <div class="centralizar" align="center">
    <button @click="show = !show">Toogle</button>

    <transition
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__zoomOutUp"
      appear
    >
      <!--A prop acima "appear" já vem com valor padrão "true",
      e usamos ela nesse exemplo, para mostrar a animação de transição
      assim que carregada a página. Para mudar o valor desssa prop:
        :appear="false"
      (v-bind/(:))
      -->
      <h1 v-if="show">Bootcamp FS Cataline</h1>
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
