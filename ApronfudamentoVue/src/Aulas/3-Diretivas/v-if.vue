<template>
  <div align="center">
    <!--Só funciona um conjunto se as tags estiverem uma seguida da outra, 
    sem nenhuma outra tag no meio delas:-->
    <h1 v-if="sex === 'M' || sex === 'm'">Hello João :)</h1>
    <h1 v-else-if="sex === 'F' || sex === 'f'">Hello Maria :)</h1>
    <h1 v-else>
      You are a non binary person!
      <h5 class="nonBinary">#lovewins</h5>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      sex: "o",
    };
  },
});
</script>

<style scoped>
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
