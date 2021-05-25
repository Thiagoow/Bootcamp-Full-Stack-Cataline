import { createApp } from "vue";

/* Importa o arquivo global.css:*/
import "../public/global.css";

//Importa a biblioteca de ícones FontAwesome5 pro css:
import "@fortawesome/fontawesome-free/css/all.css";

/*Se eu quisesse importar um componente como global:
import GlobalButtonStyled from "@/components/GlobalButtonStyled.vue";*/

/*Importa o arquivo app.vue:
import App from "./App.vue";
createApp(App).mount("#app");*/

/*----------------Executa os arquivos da pasta Aulas:*/
/*import vM from "./Aulas/3-Diretivas/DiretivasPersonalizadas.vue";
createApp(vM).mount("#app"); */

/*Importa a diretiva global personalizada:
import diretiva from "@/components/diretiva";
//Importa a aula de diretivas personalizadas:
import aulaDir from "./Aulas/3-Diretivas/diretivasPersonalizadas.vue";
//Cria o app com a diretiva:
const app = createApp(aulaDir);
//("nomeDiretiva", varDiretivaImportada):
app.directive("diretiva", diretiva);
//Monta o app com a diretiva:
app.mount("#app");*/

/* */
import App from "./Aulas/5-Componentização/DynamicComponents.vue";
const app = createApp(App);
/*Componente importado globalmente (FICA DEPOIS DO CreateApp())
app.component("IdComponenteGlobal", GlobalButtonStyled);*/
app.mount("#app");
