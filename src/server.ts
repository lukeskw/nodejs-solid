import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes, {
  prefix: '/transactions',
})

app
  .listen({
    port: env.DEFAULT_PORT,
  })
  .then(() => {
    console.log('HTTP server running')
  })
