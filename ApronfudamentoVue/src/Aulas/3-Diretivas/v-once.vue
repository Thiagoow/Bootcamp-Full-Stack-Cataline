<template>
  <div align="center">
    <!--Só pega os dados da tag <script> uma ÚNICA vez, tornando o dado que recebeu o 
        v-once, não reativo a alterações (ele vai receber, mas não vai exibir-->
    <p v-once>Estoque inicial: {{ stock }}</p>
    <p>Estoque atualizado: {{ stock }}</p>

    <button @click="stock++">Aumentar estoque</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      stock: 1
    };
  }
});
</script>
