import { createApp } from "vue";

/* Importa o arquivo global.css:*/
import "../public/global.css";

/*Importa o arquivo app.vue:
import App from "./App.vue";
createApp(App).mount("#app");*/

/*----------------Executa os arquivos da pasta Aulas:*/
/*
import DataComputed from "./Aulas/1-Propriedades/1-Data&Computed.vue";
createApp(DataComputed).mount("#app");*/

/*
import WatchMethods from "./Aulas/1-Propriedades/2-Watch&Methods.vue";
createApp(WatchMethods).mount("#app");*/

/**/
import ToDo from "./Aulas/1-Propriedades/ToDoApp.vue";
createApp(ToDo).mount("#app");
