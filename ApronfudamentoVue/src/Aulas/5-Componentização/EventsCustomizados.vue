<template>
  <div class="centralizar" align="center">
    <!--Chamamos o evento customizado com a sintaxe: 
    @nomeEvento="função($event)"
    -->
    <EventsButtonStyled text="Botãoツ" @eventoCustom="action($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventsButtonStyled from "@/components/EventsButtonStyled.vue";

export default defineComponent({
  components: {
    EventsButtonStyled,
  },
  methods: {
    action(event: string) {
      console.log(event);
      console.log("Além disso, poderia fazer outra coisa se eu quissese");
    },
  },
});
</script>

<style scoped>
.centralizar {
  /*Centralizar -- e | -> align="center" na div +:
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);*/

  /*Centralizar horizontalmente,
  mas na mesma linha -> flexbox: 
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
