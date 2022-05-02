<template>
  <div class="centralizar" align="center">
    <PropsButtonStyled text="Cadastro" color="primary" />
    <!--Uma prop é uma propriedade/atributo, que vamos passar para um elemento. Nesse caso,
  temos dois botões criados com o mesmo componente (PropsButtonStyled), mas cada um deles irá
  realizar uma função diferente. Para isso atribuímos props diferentes pra cada um. Sendo necessário, 
  também, que tais propriedades sejam definidas no componente pai, o qual foi importado.-->

    <PropsButtonStyled text="Login" color="danger" />
    <!--Botão mas com props diferentes do acima, que usa o mesmo componente, mas esse contém uma classe dinâmica
    "button-styled" e a classe estática "color", que tem o valor padrão/default: "primary"-->

    <PropsButtonStyled text="Login" color="danger" :user="user.nome" />
    <!--Agora temos outro botão, com as mesmas props do botão de login, mas esse exibe uma prop não simples,
    que pode ser de Array, ou Objeto. No caso, a prop de objeto: "user", definida no método data(),
    na tag de <script>, e importada pra essa tag <template>, com a diretiva "v-bind"/":"-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//BotãoEstilizado importado da pasta components:
import PropsButtonStyled from "@/components/PropsButtonStyled.vue";

export default defineComponent({
  components: {
    PropsButtonStyled
  },

  data() {
    return {
      user: {
        nome: "Thiago"
      }
    };
  }
});
</script>

<style scoped>
.centralizar {
  /*Centralizar -- e | -> align="center" na div +:*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /*Centralizar horizontalmente,
  mas na mesma linha -> flexbox: 
  display: flex;
  align-items: center;
  justify-content: center;*/

  /*Centrailizar horizontalmente, mas 
  NÃO na mesma linha -> grid layout:
  display: grid;
  place-items: center;*/

  /*Centralizar verticalmente: 
  position: absolute;
  top: 50%;
  transform: translateY(-50%);*/
}
</style>
