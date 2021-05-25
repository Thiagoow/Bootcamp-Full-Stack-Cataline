<template>
  <div class="centralizar" align="center">
    <button @click="show = !show">Toogle</button>
    <!--Se eu quiser um nome de classe de transição customizada, basta pegar o nome 
    da classe(sem o ".v-" inicial + class), e atribuir a ela o novo nome em string:-->
    <transition
      name="fade"
      enter-from-class="taVindoDo"
      leave-to-class="taSaindoPro"
      enter-active-class="vaiVirAssim"
      leave-active-class="vaiSairAssim"
    >
      <h1 v-if="show">Bootcamp FS Cataline</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
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
.taVindoDo,
.taSaindoPro {
  opacity: 0;
}

.vaiVirAssim,
.vaiSairAssim {
  transition: opacity 0.5s;
}

.vaiVirAssim {
  background-color: green;
}

.taSaindoPro {
  background-color: red;
}
</style>
