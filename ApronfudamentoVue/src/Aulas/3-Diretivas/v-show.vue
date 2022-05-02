<template>
  <div class="container">
    <form>
      <h5 class="title">Please type something</h5>
      <input type="text" v-model="response" />
    </form>
  </div>
  <div align="center">
    <!--Mostra o elemento na DOM APENAS se ele cumpre os requisitos:-->
    <h2 v-show="response != ''">
      We receive your response! 😊 <br />
      Thank you! 🤩🥳
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      response: ""
    };
  }
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

.title {
  font-size: 1rem;
  font-weight: 500;
  margin: 0.7rem 0;
}

button {
  margin: 0.7rem 0;
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
