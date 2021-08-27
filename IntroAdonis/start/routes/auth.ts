import Route from '@ioc:Adonis/Core/Route'

/* Um grupo de rotas com o caminho/path/prefixo -> "/auth" */
Route.group(() => {
  Route.post('/', 'AuthController.store')
  Route.delete('/', 'AuthController.destroy')
}).prefix('/auth')
