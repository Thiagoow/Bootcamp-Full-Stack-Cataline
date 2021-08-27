import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
//Modelo o qual faz as manipulações do User na dB:
import User from 'App/Models/User'

/* Esse seeder será o responsável por criar um novo
primeiro usuário para nossa aplicação. Evitando de que
haja a criação manual na dB para testes e uso das outras
funções da aplicação. */
export default class FirstUserSeeder extends BaseSeeder {
  /* Pra que essa seed não seja, de jeito NENHUM, executada 
  em modo de produção/app online e ativo: 
  public static developmentOnly = true */

  public async run() {
    //Executa quando digitarmos o comando "node ace db:seed":
    await User.create({
      email: 'firstuser@email.com',
      password: 'secret',
    })
  }
}
