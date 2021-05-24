<template>
  <button class="buttonStyled">
    Botão Estilizado Vermelho 😎
    <span>YEY</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
/*Se tiver como scoped, não vai alterar os dados definidos pelo 
css global, importado no main.ts*/
button {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
  background-color: #fa0000;
  box-shadow: 0 0 5px 3px rgba(234, 67, 45, 0.3);
}
button:hover {
  background-color: #bd0b0b;
}
</style>
