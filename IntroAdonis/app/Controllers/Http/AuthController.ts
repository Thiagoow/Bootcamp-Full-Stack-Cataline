import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    //Pega do Front End o e-mail e a senha do usuário X que se cadastrou:
    const { email, password } = request.all()

    /* Tenta autenticar com o email e a senha, criando
    um token que expira em 30 dias (se nn conseguir, ele já
    retorna um erro automaticamente): */
    const token = await auth.attempt(email, password, {
      expiresIn: '30 days',
    })

    //Retorna o token criado pra API:
    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    /* Deleta da API o token já criado para o usuário X
    com o método .logout(): */
    await auth.logout()
  }
}
