import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  //Na dB essa coluna se chama 'content':
  @column({ columnName: 'content' })
  //Mas aqui prefiro chama-la de 'body':
  public body: string

  /* Para a API que não exiba informação repetida 
  do id do autor da postagem nas requisições: */
  @column({ serializeAs: null }) //Oculta essa informação
  public authorId: number

  //Essa coluna, pertence ao modelo, no qual tem como chave estrangeira:
  @belongsTo(() => User, { foreignKey: 'authorId' })
  public author: BelongsTo<typeof User>

  @column.dateTime({
    autoCreate: true,
    //Formatando data e hora para um formato mais legível:
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    //Formatando data e hora para um formato mais legível:
    serialize: (value: DateTime) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    },
  })
  public updatedAt: DateTime
}
