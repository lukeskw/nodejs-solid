# Transactions API

This API manages user transactions, allowing users to create new transactions, view their account summary, list all transactions, and view individual transactions.

## 🚀Technologies

- [x] [Node.js](https://nodejs.org)
- [x] [Fastify](https://www.fastify.io)
- [x] [Knex.js](http://knexjs.org)
- [x] [PostgreSQL](https://www.postgresql.org)
- [x] [Zod](https://github.com/colinhacks/zod)
- [x] [dotenv](https://github.com/motdotla/dotenv)

## Functional Requirements

- [x] User should be able to create a new transaction.
- [x] User should be able to obtain their account summary.
- [x] User should be able to list all transactions that have been created.
- [x] User should be able to view a unique transaction.

## Business Rules

- [x] Transactions can be of types:
  1. [x] Credit: Adds to the total amount.
  2. [x] Debit: Subtracts from the total amount.
- [x] Transactions are associated with the user's account.
- [x] Users can only view transactions created by their account.

## Getting Started

<details>
<summary>Prerequisites</summary>

### Prerequisites

- Node.js installed
- PostgreSQL installed and running
- Clone the repository:

  ```sh
  git clone https://github.com/lukeskw/nodejs-transactions
  cd nodejs-transactions
  ```

</details>

<details>
<summary>Installation</summary>

## Installation

1. Install dependencies:

```sh
npm install
```

2. Rename .env.example to .env

3. Initialize the database:

```sh
npm run knex
```

</details>

<details>
<summary>Running the API</summary>

### Running the API

1. Start the API server:

```sh
npm run start
```

The API will be running at <http://localhost:3000>.

</details>

<details>
<summary>API Endpoints</summary>

## API Endpoints

- POST /transactions - Create a new transaction
- GET /transactions - Get all transactions
- GET /transactions/:id - Get a transaction by ID
- GET /account - Get user's account summary

### Examples

Create a new transaction

```http
POST /transactions
Content-Type: application/json

{
  "title": "Create a transaction",
  "type": "credit",
  "amount": 100
}
```

Get all transactions

```http
GET /transactions
```

Get a transaction by ID

```http
GET /transactions/:id
```

Get user's account summary

```http
GET /transactions/summary
```

</details>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

This README provides a brief overview of the Transactions API. For more detailed information, please refer to the source code and documentation within the repository.

For any questions or support, please contact <lucasporfirioa@gmail.com>.
