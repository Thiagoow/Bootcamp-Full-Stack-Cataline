<template>
  <div align="center">
    <h3>Essas são suas tarefas concluídas 😁:</h3>
    <!--5ºExibe os ToDos após passarem pela função:-->
    <p v-for="(ToDo, index) in ToDosDone" :key="index">
      <!--Como os ToDos não estão numa dB, e não tem id, criamos
      esse index no v-for pra direfenciar cada um-->
      {{ ToDo.text }}
    </p>
    <!--7ºMarca todos os ToDos como concluídos com a função:-->
    <button @click="DoneAllToDos">Concluir tudo</button>
    <!--10ºMarca todos os ToDos como não concluídos com a função:-->
    <button @click="UndoneAllToDos">Marcar tudo como pendente</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//1º-Criamos a interface construtora de todos os ToDos:
interface ToDo {
  text: string;
  done: boolean;
}

export default defineComponent({
  data() {
    return {
      /*2º-Criamos a array de ToDo a partir
      da interface(também como array): */
      ToDos: [] as ToDo[],
    };
  },
  //Observa algum dado e realiza alguma ação:
  watch: {
    //8º-Verifica se algum dos ToDos não está concluído:
    ToDos(newValue: ToDo[]) {
      //
      const isFinished = !newValue.some(({ done }) => !done);

      if (isFinished) {
        alert("Todas as suas tarefas foram CONCLUÍDAS❗ 🤩🥳");
      }
    },
  },
  /*LifeCycle Hook "created": Faz algo quando o componente
  .vue é criado*/
  created() {
    //3º-Cria os ToDos quando cria-se o componente .vue:
    this.ToDos = [
      { text: "Estudar Typescript", done: true },
      { text: "Lavar os pratos", done: true },
      { text: "Aprender Nuxt.js", done: false },
    ];
  },
  //Retorna um dado com algum tipo de alteração ou filtragrem:
  computed: {
    //4º-Retorna apenas os ToDos concluídos:
    ToDosDone(): ToDo[] {
      return this.ToDos.filter((ToDo) => ToDo.done);
    },
  },
  methods: {
    //6º: Marca todos os ToDos como done:
    DoneAllToDos() {
      this.ToDos = this.ToDos.map(({ text }) => {
        return { text, done: true };
      });
    },
    //9º: Marca todos os ToDos como unDone:
    UndoneAllToDos() {
      this.ToDos = this.ToDos.map(({ text }) => {
        return { text, done: false };
      });
    },
  },
});
</script>

<style scoped>
button {
  background-color: #2d6cea;
  color: #e1e8ef;
  display: flex;
  margin: 0.5rem;
  border: none;
  border-radius: 1rem;
  padding: 0.6rem 1.5rem;
  width: max-content;
  transition: all 0.3s linear;
  outline: none;
  cursor: pointer;
  /*Adiciona um efeito de glow: 
  box-shadow: 0 0 5px 3px rgba(45, 108, 234, 0.3);*/
}

button:hover {
  background-color: #1b5cdc;
}
</style>
