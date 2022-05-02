<template>
  <div class="centralizar" align="center">
    <button @click="show = !show">Toggle</button>
    <!--Para criar uma transição para uma ação, colocamos ela entre as tags de 
    "transition", e definimos no css, como será a transição:-->
    <transition name="fade">
      <h1 v-if="show">Bootcamp FS Cataline</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: false
    };
  }
});
</script>

<style scoped>
/*São as classes de transições no Vue:
(O nome inicial `v`(when + de 1 transição),depende do atributo `name`)
Entrada:
    .v-enter-from (de onde está vindo)
    .v-enter-active (como vai acontecer)
    .v-enter-to (para onde está indo) 
Saída:
    .v-leave-from (de onde está vindo)
    .v-leave-active (como vai acontecer)
    .v-leave-to (para onde está indo) */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
