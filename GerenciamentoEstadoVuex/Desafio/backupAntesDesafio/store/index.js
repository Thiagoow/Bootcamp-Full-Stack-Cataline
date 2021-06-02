//É tipo o createApp do Vue:
import { createStore } from "vuex";

export default createStore({
  state: {
    /*É tipo o method "data" do Vue, que guarda os
    estados da aplicação*/
    ToDos: [],
  },
  mutations: {
    /*É onde alteramos o estado, EXECUTANDO algo criado na "action",
    confirmamos e rastreamos as alterações de estado*/
    SET_TODOS(state, ToDos) {
      state.ToDos = ToDos;
    },
    /*Colocamos o nome da mutation todo maiúsculo e separado por "_"
    para diferenciar das actions, no VueDevTools*/
  },
  actions: {
    /*É tipo o objeto "methods" do Vue, onde aqui, inserimos nossas funções,
    que irão alterar o estado de algo no app, APÓS serem executadas na mutations*/
    listToDos(context) {
      const ToDos = [
        { id: 1, text: "Estudar HTML & CSS", done: true },
        { id: 2, text: "Conceitos Vuex", done: true },
        { id: 3, text: "Atomic Design", done: false },
        { id: 4, text: "Começar com Nuxt", done: false },
        { id: 5, text: "Back-end com Adonis", done: false },
      ];
      //Altera o estado pela mutation de estado:
      context.commit("SET_TODOS", ToDos);
    },
  },
  getters: {
    /*É tipo o objeto "computed" do Vue. Onde nos fornece o estado de algo na aplicação.
    Podendo este ser o estado atual, antigo, editado, filtrado, ou computado*/
    $allToDos(state) {
      return state.ToDos;
    },
    /*Os getter que possuírem um $ antes do nome, são os que
    irão servir apenas de leitura.*/
    $doneToDos(state) {
      return state.ToDos.filter((ToDo) => ToDo.done);
    },
  },
});
