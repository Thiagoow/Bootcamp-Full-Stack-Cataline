import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/* ACL -> Access Control List: É a hierarquia de usuários de uma aplicação */

export default class Acl {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowedRoles: string[]
  ) {
    //Acima colocamos o parâmetro 'allowedRoles':
    //Mostra no console quem são os user permitidos -> console.log(allowedRoles)

    //Tenta autenticar o usuário com o token dele:
    const user = await auth.authenticate()

    /* Verifica se nos cargos permitidos, o cargo a qual o
    usuário pertence existe, ou seja, é permitido: */
    if (!allowedRoles.includes(user.role)) {
      //Se o user não é permitido, retorna a resposta com a mnsg:
      return response.unauthorized({
        error: { message: 'Acesso negado 🖐🏼😠 Acho que você não é um admin... 👀🤨' },
      })
    }
    //Se o user for permitido:
    await next()
  }
}
