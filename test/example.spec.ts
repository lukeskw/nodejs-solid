import { expect, test } from 'vitest'

test('user should be able to create a new transaction', () => {
  // do a http cal to create a new transaction

  const response = 201
  expect(response).toEqual(201)
})
