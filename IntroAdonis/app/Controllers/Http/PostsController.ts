import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/* Como um controller não acessa a dB, e sim o model, importamos ele aqui: */
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    /* Pega todos os posts da Db, mas com o await
    para que ele não retorne vazio: */
    const posts = await Post.all()

    //Retorna todas as postagens encontradas na dB:
    return posts
  }

  public async store({ request }: HttpContextContract) {
    /* Pega da requisição enviada pelo Front End apenas
    o título e o conteúdo:*/
    const data = request.only(['title', 'body'])
    /* Msm coisa de fazer:
      const { title, body } = request.all()*/

    // Armazena na variável post os dados da requisição de envio:
    const post = await Post.create(data)

    //Retorna a postagem criada:
    return post
  }

  public async show({ params }: HttpContextContract) {
    /* Busca na  dB a postagem pelo id (usando o método find,
    o qual busca pela chave primária. Nesse caso o id): */
    const post = await Post.findOrFail(params.id)
    /* Busca na dB a postagem pelo id (usando querySQL):
    const post = await Database.rawQuery(`select * from posts where id = ${params.id}`)
    */

    /* Se não encontrar a postagem na dB (usando if): 
    if (!post) {
      return response.notFound({ error: { message: 'Post not found :c' } })
    }*/

    //Retorna a postagem buscada:
    return post
  }

  public async update({ request, params }: HttpContextContract) {
    /* Pega a postagem na dB pelo id: */
    const post = await Post.findOrFail(params.id)
    /* Pega as novas informações da postagem pra atualizar */
    const data = request.only(['title', 'body'])

    //Mescla/merge a postagem com os novos dados:
    post.merge(data)

    //Salva a atualização na dB:
    await post.save()

    //Retorna a postagem atualizada:
    return post
  }

  public async destroy({ params }: HttpContextContract) {
    // Apaga a postagem na dB pelo id:
    const post = await Post.findOrFail(params.id)
    await post.delete()

    //Como é método de exclusão não precisa retornar nada :)
  }
}
