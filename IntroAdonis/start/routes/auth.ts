import Route from '@ioc:Adonis/Core/Route'

/* Um grupo de rotas com o caminho/path/prefixo -> "/auth" */
Route.group(() => {
  Route.post('/', 'AuthController.store')
  // Definindo a middleware para proteção da rota de deletar:
  Route.delete('/', 'AuthController.destroy').middleware('auth')
}).prefix('/auth')
