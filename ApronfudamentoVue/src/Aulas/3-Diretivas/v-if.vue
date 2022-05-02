<template>
  <div class="container">
    <form>
      <h5 class="title">Please type your sex:</h5>
      <input
        type="text"
        v-model="sex"
        placeholder="M, F, or any. We are not prejudiced 😊"
      />
    </form>
  </div>
  <div align="center">
    <!--Só funciona um conjunto se as tags estiverem uma seguida da outra, 
    sem nenhuma outra tag no meio delas:-->
    <h2 v-if="sex === ''">...</h2>
    <h2 v-else-if="sex === 'M' || sex === 'm'">Your are a men! 🧔🚹</h2>
    <h2 v-else-if="sex === 'F' || sex === 'f'">Your are a woman! 👩🚺</h2>
    <h2 v-else>
      You are a non binary person! 🏳️‍🌈
      <h5 class="nonBinary">#loveWins</h5>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      sex: ""
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
.nonBinary {
  margin-top: 0px;
  margin-bottom: 50px;
  text-align: center;
  font-family: sans-serif;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: -2px 2px #f48fb1, -4px 4px #ef3550, -6px 6px #7e57c2,
    -8px 8px #2196f3, -10px 10px #26c6da, -12px 12px #43a047, -14px 14px #eeff41,
    -16px 16px #f9a825, -18px 18px #ff5722;
}
</style>
