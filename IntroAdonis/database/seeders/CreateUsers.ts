/* Para executar as seeders no Heroku (precisa da CLI do Heroku):
heroku run node build/ace db:seed -i --app=nome-do-seu-app-no-heroku

Onde o comando "-i" = Pra escolher qual seeder queremos executar. E não
TODAS de uma vez. Se eu quiser TODAS DE UMA VEZ, basta retirar o "-i". */
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
//Modelo o qual faz as manipulações do User na dB:
import User from 'App/Models/User'

/* Esse seeder será o responsável por criar um novo
primeiro usuário para nossa aplicação. Evitando de que
haja a criação manual na dB para testes e uso das outras
funções da aplicação. */
export default class CreateUsersSeeder extends BaseSeeder {
  /* Pra que essa seed não seja, de jeito NENHUM, executada 
  em modo de produção/app online e ativo: 
  public static developmentOnly = true */

  public async run() {
    //Executa quando digitarmos o comando "node ace db:seed":
    await User.createMany([
      /* Cria os dois tipos de usuários -> admin, e normal
      respectivamente: */
      {
        name: 'Lester',
        email: 'adminUser@email.com',
        password: 'secretAdminPass:p',
        role: 'admin',
      },
      {
        name: 'Beluga',
        email: 'normalUser@email.com',
        password: 'secret123',
        role: 'normal',
      },
    ])
  }
}
