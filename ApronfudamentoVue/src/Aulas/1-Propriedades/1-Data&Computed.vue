<template>
  <div align="center">
    <h1>Helloツ {{ person.name }}</h1>
    <h2>Your full name is: {{ fullName }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Person {
  name: string;
  surname: string;
  age: number;
}
export default defineComponent({
  //data - Recebe as variáveis de qualquer tipo, utilizadas no projeto:
  data() {
    return {
      person: {
        name: "Thiago",
        surname: "Silva Lopes",
        age: 18,
      } as Person,
    };
  },
  //computed - retorna um dado com algum tipo de alteração ou filtragem:
  computed: {
    fullName(): string {
      return `${this.person.name} ${this.person.surname}`;
      //Nesse caso, a alteração é concatenar o nome e sobrenome com uma função :)
    },
  },
});
</script>
