import BaseSchema from '@ioc:Adonis/Lucid/Schema'

/* Isso é uma migration :D É com elas que podemos inserir, alterar
e deletar (CRUD) os dados e tabelas da nossa dB conectada :D */

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  /* Esse método 'up' cria uma tabela: 
  Usando o comando -> "node ace migration:run" no terminal: */
  public async up() {
    //Comando o qual cria uma tabela com as colunas:
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      //notNullable() -> Não pode ser vazio:
      table.string('title').notNullable()
      //text -> String maior:
      table.text('content', 'longtext').notNullable()
      table.timestamps(true) /*Cria um 'created_at' e um 'updated_at' os 
      quais são atualizados automaticamente */
    })
  }

  /* Esse método abaixo 'down' destrói/delete uma
  tabela INTEIRA E TODO SEU CONTEÚDO:
  Usando o comando -> "node ace migration:rollback" no terminal: */
  public async down() {
    this.schema.dropTable(this.tableName)
  }

  /* Criando uma nova coluna na tabela sem precisar deletar
  ela INTEIRA e TODO seu (Criando uma outra/nova migration):

  "node ace make:migration nomeMigration --table=nomeTabela"
  */
}
