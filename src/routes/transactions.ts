import { FastifyInstance } from 'fastify'
import { knex } from '../database'

import { z } from 'zod'

export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, response) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const body = createTransactionBodySchema.parse(request.body)

    const { title, amount, type } = body

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return response.status(201).send()
  })
}
