<template>
  <!--☝🏽 É nessa tag que ficam os códigos HTML local com Vue:-->
  <main class="users">
    <div class="container">
      <section>
        <!--De criar usuário-->
        <h5 class="title">Novo usuário</h5>
        <form @submit.prevent="createUser">
          <!--Com o @(que é a msm coisa do v-on), enviamos os dados 
          preenchidos pelo form, utilizando a função/método createUser-->
          <input type="text" placeholder="Nome" v-model="form.email" />
          <!--Esse v-model="" é uma 2wayDataBinding, ou seja:
          retorna oq já existe e envia o novo dado do form-->
          <input type="email" placeholder="E-mail" v-model="form.name" />
          <button type="submit">Adicionar</button>
        </form>
      </section>

      <section>
        <!--De lista de usuários-->
        <h5 class="title">Lista de usuários</h5>
        <ul>
          <!--Uma linha pra casa user a partir do id:-->
          <li v-for="user in users" :key="user.id">
            <!--Se o user não tivesse um identificador único (id),
            poderíamos listar do seguinte jeito:
              <li v-for="(user, index) in users" :key="index">
            -->

            <p>{{ user.name }}</p>
            <small>{{ user.email }}</small>
            <!--Botão de deletar User com @/v-on:"nomeFunção/método(user.id)"-->
            <a class="delete" @click="deleteUser(user.id)"></a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
//☝🏽 É nessa tag que ficam os códigos Js local com Vue:

import { defineComponent } from "vue";
import axios from "../src/utils/axios";
//Importa a interface User que dá a tipagem dos usuários:
import { User } from "../src/models";

export default defineComponent({
  data() {
    return {
      users: [] as User[],
      form: {
        name: "",
        email: ""
      }
    };
  },
  // Hook pra criar o método listUsers quando a pág carregar:
  created() {
    this.listUsers();
  },
  //Aqui ficam as funções/métodos do app:
  methods: {
    async listUsers() {
      try {
        const { data } = await axios.get("/users");
        this.users = data;
      } catch (error) {
        console.warn(error);
      }
    },
    async createUser() {
      try {
        const { data } = await axios.post("/users", this.form);
        this.users.push(data);

        //Limpa o form:
        this.form = {
          name: "",
          email: ""
        };
      } catch (error) {
        console.warn(error);
      }
    },
    async deleteUser(id: User["id"]) {
      try {
        //Exclui o usuário do server:
        await axios.delete(`/users/${id}`);
        //Encontrado o id do usuário no app:
        const userIndex = this.users.findIndex((user) => user.id === id);
        //Exclui o usuário da dB com array:
        this.users.splice(userIndex, 1);
        /*(Só 1 vez, pra apagar apenas o usuário desejado,
        e não o outro depois dele)*/
      } catch (error) {
        console.warn(error);
      }
    }
  }
});
</script>

<style scoped>
/*☝🏽 É nessa tag que ficam os códigos CSS local com Vue:*/
.container {
  margin: 4rem auto;
  max-width: 500px;
  width: 90%;
  display: grid;
  grid-gap: 2.5rem;
}

.title {
  font-size: 1rem;
  font-weight: 500;
  margin: 0.7rem 0;
}

form {
  display: grid;
  grid-gap: 1rem;
}

input {
  background: transparent;
  border: 1px solid #999fc6;
  border-radius: 1rem;
  padding: 0.6rem;
  outline: none;
  color: #e1e8ef;
}

input::placeholder {
  color: #999fc6;
}

button {
  background-color: #2d6cea;
  color: #e1e8ef;
  border: none;
  border-radius: 1rem;
  padding: 0.6rem 1.5rem;
  width: max-content;
  transition: all 0.3s linear;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 5px 3px rgba(45, 108, 234, 0.3);
}

button:hover {
  background-color: #1b5cdc;
}

p {
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 1rem;
}

li {
  background-color: #2b3a4e;
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  position: relative;
  list-style: none;
  color: #8b98a8;
}

.delete {
  background-color: #d53e6b;
  width: 24px;
  height: 24px;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s linear;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.3rem;
}

.delete:before,
.delete:after {
  content: "";
  width: 3px;
  height: 13px;
  background-color: #ececf6;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
}

.delete:before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.delete:after {
  transform: translate(-50%, -50%) rotate(130deg);
}

.delete:hover {
  background-color: #984848;
}
</style>
