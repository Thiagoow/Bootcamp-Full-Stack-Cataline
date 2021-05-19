<template>
  <div align="center">
    <!--Mostra o elemento na DOM APENAS se ele cumpre os requisitos:-->
    <h1 v-show="sex != 'M' && sex != 'm' && sex != 'F' && sex != 'f'">
      You are a non binary person!
      <h5 class="nonBinary">#lovewins</h5>
    </h1>

    <h1 v-show="sex === 'M' || sex === 'm' || sex === 'F' || sex === 'f'">
      Your sex is or M or F! 😊 <br />
      Be happy mate! 🤩🥳
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      sex: "i",
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
