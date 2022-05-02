<template>
  <div class="centralizar" align="center">
    <button @click="show = !show">Toggle</button>
    <!--Para usar a biblioteca Animate.css, não precisamos definir NADA numa tag <style>, apenas 
        instalamos ela no nosso projeto com o npm, importamos ela na tag script(2* passo) e renomeamos 
        as classes "enter-active" e "leave-active" para "animate__animated nomeClasseAnimação":-->
    <transition
      name="fade"
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__zoomOutUp"
    >
      <h1 v-if="show">Bootcamp FS Cataline</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//2* PASSO: Importar a biblioteca:
import "animate.css";

export default defineComponent({
  data() {
    return {
      show: false
    };
  }
});
</script>
