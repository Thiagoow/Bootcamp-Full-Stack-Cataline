import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

//Usa o estado(store) antes de montar o componente Vue:
createApp(App).use(store).mount("#app");
