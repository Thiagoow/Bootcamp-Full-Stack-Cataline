<template>
  <h1>Helloツ {{ person.name }}</h1>
  <h2>Your full name is: {{ fullName }}</h2>
  <!--Test-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Person {
  name: string;
  surname: string;
  age: number;
}
export default defineComponent({
  data() {
    return {
      person: {
        name: "Thiago",
        surname: "Silva Lopes",
        age: 18,
      } as Person,
    };
  },
  //Propriedade computada - retorna um dado com algum tipo de alteração:
  computed: {
    fullName(): string {
      return `${this.person.name} ${this.person.surname}`;
      //Nesse caso, nossa alteração é concatenar o nome e sobrenome numa função :)
    },
  },
});
</script>

<style scoped>
/*Teste*/
</style>
