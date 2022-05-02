<template>
  <div align="center">
    <a :href="product.url" :class="productClass">
      <!--"v-bind:" ou só ":" -> Associa dados do nosso data(), pra tag template 
      mas dentro de atributos HTML, ou seja, sem a interpolação {{}} 😉-->
      {{ product.name }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      product: {
        name: "Camisa",
        url: "http://loja.com/produto/12345",
        stock: true
      }
    };
  },
  computed: {
    productClass(): string {
      return this.product.stock ? "inStock" : "unStock";
    }
  }
});
</script>

<style scoped>
.inStock {
  color: green;
}

.unStock {
  color: red;
}
</style>
