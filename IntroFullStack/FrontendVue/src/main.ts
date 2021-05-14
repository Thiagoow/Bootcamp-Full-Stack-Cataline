import { createApp } from "vue";
import App from "./App.vue";
/*
Importa o pacote normalize.css instalado com:
    npm i normalize.css
*/
import "normalize.css";

//Importa o css global:
import "@/assets/css/main.css";

createApp(App).mount("#app");
