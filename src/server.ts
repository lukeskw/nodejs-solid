import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Hello World',
      amount: 10000,
    })
    .returning('*')
  // const transaction = await knex('transactions').select('*')

  return transaction
})

app
  .listen({
    port: env.DEFAULT_PORT,
  })
  .then(() => {
    console.log('HTTP server running')
  })
