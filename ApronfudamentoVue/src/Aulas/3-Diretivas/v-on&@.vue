<template>
  <div class="container">
    <form>
      <!--Ao clicar uma vez, realiza a função, e previne a página de recarregar:-->
      <a href="#interno" @click.once.prevent="something"> Link Interno </a>
      <input
        type="text"
        placeholder="Type E and check console :)"
        @keyup.e="heasterEgg"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    something() {
      console.log("Foi executado uma vez, e não será executado mais :D");
    },
    heasterEgg() {
      console.warn("YOU FOND THE HEASTER EGG :D");
    },
  },
});
</script>

<style scoped>
.container {
  margin: 4rem auto;
  max-width: 500px;
  width: 90%;
  display: grid;
  grid-gap: 2.5rem;
}

form {
  display: grid;
  grid-gap: 1rem;
}

input {
  background: transparent;
  border: 1px solid #999fc6;
  border-radius: 1rem;
  padding: 0.6rem;
  outline: none;
  color: #e1e8ef;
  box-shadow: 0 0 5px 3px rgba(45, 108, 234, 0.3);
}

input::placeholder {
  color: #999fc6;
}
</style>
