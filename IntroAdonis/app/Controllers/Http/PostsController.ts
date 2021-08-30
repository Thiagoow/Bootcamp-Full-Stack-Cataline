import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/* Como um controller não acessa a dB, e sim o model, importamos ele aqui: */
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
  public async index({}: HttpContextContract) {
    /* Pega todos os posts da Db, mas com o await
    para que ele não retorne vazio: */
    const posts = await Post.all()
    /* Usando o método all(), ele lista pra mim todos
    os posts em ordem de CRIAÇÃO. Do mais recente ao
    mais antigo. Para mudar isso, e listar por ordem
    do id por exemplo (do mais antigo ao mais recente),
    basta usar ao invés do all() o query().orderBy():
      
      const posts = await Post.query().orderBy('id')
    */

    //Retorna todas as postagens encontradas na dB:
    return posts
  }

  public async store({ request, auth }: HttpContextContract) {
    /* Pega da requisição enviada pelo Front End apenas
    o título e o conteúdo:*/
    //const data = request.only(['title', 'body'])
    /* Msm coisa de fazer:
      const { title, body } = request.all()*/

    /* Pega da requisição enviada pelo Front End apenas
    o título e o conteúdo e valida com o validator:*/
    const data = await request.validate(PostValidator)
    /* Autentica qual usuário fez esse posto a ser armazenado
    na dB: */
    const user = await auth.authenticate()

    /* Armazena na variável post o envio do user X + 
    os dados da requisição de postagem que ele fez: */
    const post = await Post.create({ authorId: user.id, ...data })

    // Carrega para a postagem os dados do usuário:
    await post.load('author')

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
    /* Pega as novas informações da postagem pra atualizar 
    const data = request.only(['title', 'body'])*/

    /* Pega as novas informações da postagem pra atualizar 
    e valida com o validator: */
    const data = await request.validate(PostValidator)

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
