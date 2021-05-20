<template>
  <div align="center">
    <CSSButton>Helloツ</CSSButton>
    <!--O texto que eu adicionar no meio da tag importada não vai aparecer, pois ele
    a tag importada já utiliza o texto presente nela mesma. Se esse texto não existir
    na tag importada, não terá texto aqui também.-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//BotãoEstilizado importado da pasta components:
import BotãoEstilizado from "@/components/ButtonStyled.vue";

export default defineComponent({
  components: {
    CSSButton: BotãoEstilizado,
  },
});
</script>

<style scoped></style>
