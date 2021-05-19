<template>
  <div align="center">
    <!--Mostra o elemento na DOM APENAS se ele cumpre os requisitos:-->
    <ul></ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      products: [
        { id: 1, name: "Camisa", stock: true },
        { id: 2, name: "Bota", stock: false },
        { id: 3, name: "Chapéu", stock: false },
        { id: 4, name: "Cinto", stock: true },
      ],
    };
  },
});
</script>
