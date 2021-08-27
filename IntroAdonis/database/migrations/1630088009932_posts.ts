import BaseSchema from '@ioc:Adonis/Lucid/Schema'

/* Comandos do Adonis pra database:
  UNDO/Desfazer: "node ace migration:rollback"
*/
export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  /* Esse método 'up' cria uma tabela: 
  Usando o comando -> "node ace migration:run" no terminal: */
  public async up() {
    //Comando o qual cria uma tabela:
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.text('content', 'longtext') //text -> String maior
      table.timestamps(true) /*Cria um 'created_at' e um 'updated_at' os 
      quais são atualizados automaticamente */
    })
  }

  /* Esse método abaixo 'down' destrói/delete uma tabela:
  Usando o comando -> "" no terminal: */
  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
