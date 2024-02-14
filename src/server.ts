import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.DEFAULT_PORT,
  })
  .then(() => {
    console.log('HTTP server running')
  })
