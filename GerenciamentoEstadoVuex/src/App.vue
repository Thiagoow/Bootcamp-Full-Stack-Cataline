<template>
  <ul>
    <li v-for="ToDo in $allToDos" :key="ToDo.id">
      {{ ToDo.text }}
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    //Função que lista todos os ToDos presentes no index.js:
    $allToDos() {
      return this.$store.getters.$allToDos;
    },
  },
  /*Com o life cycle hook de quando a aplicação for criada,
  executamos a action lá do index.js, de chamar todos os ToDos criados:*/
  created() {
    this.$store.dispatch("listToDos");
    //Dispatch -> disparar. Nesse caso, a action.
  },
};
</script>
