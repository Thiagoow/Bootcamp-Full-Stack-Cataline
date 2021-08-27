import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  /* 'serializeAs: null' -> Esconde a coluna e
  não a exibe numa requisição GET: */
  @column({ serializeAs: null })
  public password: string

  @column()
  /* O cargo/role do usuário pode ser
  admin ou normal: */
  public role: 'admin' | 'normal'

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  /* Depois do usuário ser salvo, ele salva a senha
  do usuário codificada com o Hash.make(): */
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
