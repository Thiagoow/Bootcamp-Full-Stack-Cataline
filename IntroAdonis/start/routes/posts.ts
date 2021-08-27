import Route from '@ioc:Adonis/Core/Route'

/* Cria rota para /posts com TODOS os métodos presentes no
PostsController, EXCETO os que foram deletados, graças ao 
método apiOnly: */
Route.resource('/posts', 'PostsController')
  .apiOnly()
  .middleware({
    /* Definindo a middleware para proteção da
    rota de cada um dos métodos desse controller: */
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth'],
  })
