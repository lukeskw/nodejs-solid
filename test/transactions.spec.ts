import { expect, it, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new transaction', async () => {
    // do a http cal to create a new transaction
    const response = await request(app.server).post('/transactions').send({
      title: 'Test transaction',
      amount: 5000,
      type: 'credit',
    })
    expect(response.statusCode).toEqual(201)
  })
})
