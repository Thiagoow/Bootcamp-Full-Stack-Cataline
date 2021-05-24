<template>
  <div class="content" align="center">
    <PropsButtonStyled text="Cadastro" color="primary" />
    <!--Um prop é uma propriedade/atributo, que vamos passar para um elemento. Nesse caso,
  temos dois botões criados com o mesmo componente (PropsButtonStyled), mas cada um deles irá
  realizar uma função diferente. Para isso atribuímos props diferentes pra cada um. Sendo necessário, 
  também, que tais propriedades sejam definidas no componente pai, o qual foi importado.-->

    <PropsButtonStyled text="Login" color="danger" />
    <!--Botão mas com props diferentes do acima, que usa o mesmo componente, mas esse contém uma classe dinâmica
    "button-styled" e a classe estática "color", que tem o valor padrão/default: "primary"-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//BotãoEstilizado importado da pasta components:
import PropsButtonStyled from "@/components/PropsButtonStyled.vue";
export default defineComponent({
  components: {
    PropsButtonStyled,
  },
});
</script>

<style scoped>
.content {
  position: absolute;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
