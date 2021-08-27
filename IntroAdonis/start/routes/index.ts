import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './posts'

Route.get('/', async () => {
  return { hello: 'world :D' }
})
