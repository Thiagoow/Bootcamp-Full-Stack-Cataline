<template>
  <div class="centralizar" align="center">
    <transition-group
      enter-active-class="animate__animated animate__zoomInDown"
      leave-active-class="animate__animated animate__zoomOutUp"
      appear
      mode="out-in"
    >
      <!--A tag transition, por padrão, só aceita 1 elemento como filho.
    Por exemplo um <h1>. Se eu tentar adicionar outro h1, a compilação dá erro.
    Para contornar esse comportamento, usamos os v-ifs, para exibir apenas um ou outro. OU ENTÃO:

    1-Envolvemos os elementos em uma única div. Porém, desse jeito, todos os elementos dentro
    dela receberão em conjunto, a mesma animação;

    2-Definimos a tag transition como "<tranision-group>", e usamos os elementos agrupados em
    uma lista. E adicionamos na tag style, a classe:
        .v-move {
            transition: all 0.5s;
        }
    Fazendo a animação de transição, se tornar aplicável individualmente, pra cada elemento 😎.-->
      <li v-for="user in users" :key="user">
        {{ user }}
      </li>
      <!--Sendo executadas as animações, nesse caso, quando:

      Alteramos/Adicionamos/Deletamos algum dado na lista;
      Quando mudamos a posição de cada item da lista.
      -->
    </transition-group>

    <button @click="filtroAZ">Filtrar A-Z</button>
    <button @click="filtroZA">Filtrar Z-A</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "animate.css";

export default defineComponent({
  data() {
    return {
      users: ["Thiago", "Lulee", "Millena", "Bella"],
    };
  },
  methods: {
    filtroAZ() {
      this.users.sort();
    },
    filtroZA() {
      this.users.sort().reverse();
    },
  },
});
</script>

<style scoped>
.centralizar {
  line-height: 1.5rem;
}
.v-move {
  transition: all 0.5s;
}
</style>
