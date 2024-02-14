import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0',
    port: env.DEFAULT_PORT,
  })
  .then(() => {
    console.log('HTTP server running')
  })
