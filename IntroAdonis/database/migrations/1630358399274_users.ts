import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      /* Posso trocar a coluna de email ou inserir outras
      abaixo dela normalmente, MAS SE EU ALTERAR ESSA COLUNA
      DE 'email' pra 'username' por exemplo, também precisarei
      alterar o nome no arquivo @/config/auth.ts!!!! */
      table.string('email', 255).notNullable()
      //Não devo alterar esses dois abaixo NUNCA/DE JEITO NENHUM:
      table.string('password', 180).notNullable()
      /*Nome do usuário: (quando não definimos o máximo de caracteres
      que podem existir num dado dessa coluna, ele vem como default 255)*/
      table.string('name').notNullable()
      /* Coluna a qual define o cargo/role do usuário, sendo o valor
      default 'normal', caso não seja especificado ;) */
      table.enu('role', ['normal', 'admin']).notNullable().defaultTo('normal')
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
