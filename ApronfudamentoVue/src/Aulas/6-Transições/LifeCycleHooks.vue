<template>
  <!--São os ganchos de ciclo de vida das transições:
    Entrada:
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
    Saída:
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
    -->
  <div class="centralizar" align="center">
    <button @click="show = !show">Toogle</button>

    <transition
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__zoomOutUp"
      @before-enter="beforeEnter"
    >
      <!--1º- Usamos acima, o lifecycle hook de transição antes da entrada,
      mas poderíamos usar qualquer outro life cycle hook de transição,
      com diferentes efeitos na transição 😉-->
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
      show: false,
    };
  },
  methods: {
    /*2º- Descobrimos qual a tipagem do evento vendo
    o que o console.log nos retorna a partir dele.
    Assim:
        nomeMethod(event: any) {
            console.log(event);
        }
    */
    beforeEnter(element: HTMLElement) {
      //3º- tipamos o evento corretamente e construímos ele do jeito que quisermos (e a tipagem suportar):
      console.log(element);
      element.classList.add("test");
    },
  },
});
</script>

<style scoped>
.test {
  background-color: blue;
}
</style>
