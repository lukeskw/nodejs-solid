import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    // const transaction = await knex('transactions')
    //   .insert({
    //     id: crypto.randomUUID(),
    //     title: 'Hello World',
    //     amount: 10000,
    //   })
    //   .returning('*')
    const transaction = await knex('transactions').select('*')

    return transaction
  })
}
