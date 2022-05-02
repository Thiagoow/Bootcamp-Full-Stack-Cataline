<template>
  <div align="center">
    <form>
      <!--Remove os espaçamentos no começo e final do conteúdo digitado com o ".trim":-->
      <input type="text" v-model.trim="name" placeholder="Nome" />
      <!--Define o atributo digitado como number com o ".number":
      (do contrário, o conteúdo digitado fica como string)-->
      <input type="number" v-model.number="age" placeholder="Idade" />

      <textarea
        rows="2"
        v-model.trim="message"
        placeholder="Descrição"
      ></textarea>

      <input type="checkbox" v-model="newsletter" /> Newsletter <br />

      <input type="radio" v-model="color" name="color" value="vermelho" />
      Vermelho
      <input type="radio" v-model="color" name="color" value="verde" /> Verde
      <input type="radio" v-model="color" name="color" value="azul" /> Azul

      <select v-model="fruit">
        <option disabled selected>Selecione uma fruta</option>
        <option value="uva">Uva</option>
        <option value="banana">Banana</option>
        <option value="morango">Morango</option>
      </select>
    </form>

    <p class="label">Nome:</p>
    <p>{{ name }}</p>
    <p class="label">Idade:</p>
    <p>{{ age }}</p>
    <p class="label">Mensagem:</p>
    <p>{{ message }}</p>
    <p class="label">Newsletter:</p>
    <p>{{ newsletter }}</p>
    <p class="label">Cor:</p>
    <p>{{ color }}</p>
    <p class="label">Fruta:</p>
    <p>{{ fruit }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "",
      age: 0,
      message: "",
      newsletter: false,
      color: "",
      fruit: ""
    };
  },
  //Se quiséssemos enviar para um db os dados:
  methods: {
    send() {
      //axios.post("/cadastroURL", this.form);
    }
  }
});
</script>

<style>
/*Se tiver como scoped, não vai alterar os dados definidos pelo 
css global, importado no main.ts*/
.label {
  font-family: "JetBrains Mono";
  font-size: 0.5;
  font-style: bold;
  color: rgb(0, 47, 255);
}

input[type="email"],
input[type="text"],
select,
textarea {
  display: block;
  margin: 1rem;
  width: static;
  max-height: 314rem;
  font-family: "JetBrains Mono";
  font-size: 0.5;
}

form {
  font-family: "JetBrains Mono";
  font-size: 0.5;
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}

p {
  display: fixed;
}
</style>
