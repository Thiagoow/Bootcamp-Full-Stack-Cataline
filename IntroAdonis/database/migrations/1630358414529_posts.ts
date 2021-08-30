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
      /* unsigned() = Sem limite de caracteres (toda coluna increments
      possui um desses automaticamente);
      references('X') = Referencia a coluna X
      inTable('Y') = Na tabela Y

      onUpdate()/onDelete() = 'CASCADE' | 'RESTRICT' | 'DELETE':
        'DELETE' -> Se a coluna id da tabela 'users' for deletada/o
        user que fez a publicação for deletado/atualizado, deleta essa
        publicação feita por ele;
        'CASCADE' -> Faz com a postagem a mesma coisa que foi feita
        com a coluna id da tabela 'users': atualiza, ou deleta;
        'RESTRICT' Não deixa deletar nem atualizar o id na tabela 'users'
        se existir uma publicação feita por ele.
      */
      table
        .integer('author_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
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
