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

  @column()
  public authorId: number

  //Essa coluna, pertence ao modelo, no qual tem como chave estrangeira:
  @belongsTo(() => User, { foreignKey: 'authorId' })
  public author: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
