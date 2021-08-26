// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  index() {
    return ['postagem 1', 'postagem 2', 'postagem 3']
  }
}
//Route -> Controller -> Model(Opcionalmente)
