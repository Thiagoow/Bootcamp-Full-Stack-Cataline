<template>
  <div class="content" align="center">
    <!--Nesse caso, nosso componente filho é esse:-->
    <ButtonStyled />
    <!--Já que ele está dentro desse arquivo, que é um componente Vue-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//BotãoEstilizado importado da pasta components:
import ButtonStyled from "@/components/ButtonStyled.vue";

export default defineComponent({
  components: {
    ButtonStyled
  }
});
</script>

<style scoped>
/*Para estilizar então, apenas nosso componente filho,
pegamos a classe da tag raiz desse componente, nesse caso, como ele é um botão,
a classe presente na tag "button". E aplicamos num <style scoped> a estilização que queremos
pra esse componente filho. */
.content {
  /* */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/*Se não colocarmos essa estilização na classe, todos os elementos "button" vão receber essa estilização.
Tal estilização DEVE ser no <style scoped>, para estilizar apenas o componente filho
presente NESSE arquivo/componente geral Vue. Aplicando-se apenas para as tags script, template
e style DESSE arquivo.

Do contrário, se usarmos apenas a tag <style>, sem o "scoped", a estilização feita dentro da tag,
se aplicará para todos os componentes/arquivos gerais Vue. Em todas as tags: script, style, e template.*/

/*Se eu quiser fazer uma estilização profunda, além da tag raiz, como nesse caso, com a tag <span>, presente dentro
da tag raiz "button", usamos o "::v-deep", do contrário, o Vue não deixa estilizarmos profundamente.*/
::v-deep.buttonStyled span {
  color: black;
  font-style: italic;
  font-weight: bolder;
}
</style>
