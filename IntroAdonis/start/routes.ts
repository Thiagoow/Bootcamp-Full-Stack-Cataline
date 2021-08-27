import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world :D' }
})

/* Cria rota para /posts com TODOS os métodos presentes no
PostsController, EXCETO os que foram deletados, graças ao 
método apiOnly: */
Route.resource('/posts', 'PostsController').apiOnly()
