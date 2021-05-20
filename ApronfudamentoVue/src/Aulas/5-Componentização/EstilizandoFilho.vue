<template>
  <div align="center">
    <ButtonStyled />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//BotãoEstilizado importado da pasta components:
import ButtonStyled from "@/components/ButtonStyled.vue";

export default defineComponent({
  components: {
    ButtonStyled,
  },
});
</script>

<style scoped></style>
