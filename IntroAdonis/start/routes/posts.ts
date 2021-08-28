import Route from '@ioc:Adonis/Core/Route'

/* Cria rota para /posts com TODOS os métodos presentes no
PostsController, EXCETO os que foram deletados, graças ao 
método apiOnly: */
Route.resource('/posts', 'PostsController')
  .apiOnly()
  .middleware({
    /* Definindo a middleware para proteção da
    rota de cada um dos métodos desse controller:*/
    store: ['acl:admin'],
    update: ['acl:admin'],
    destroy: ['acl:admin'],
    /* ☝🏼 A (acl:) define qual usuários irão fazer tais ações
    nessa rota de Posts pelo controlador de posts 😎😉 */
  })
