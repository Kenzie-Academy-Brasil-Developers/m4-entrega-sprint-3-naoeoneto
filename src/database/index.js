import 'dotenv/config'
import { Client } from 'pg';

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: 'postgres',
        host: 'localhost',
        database: 'tests_products',
        password: 'qaswedfrtg',
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

const startDatabase = async () => {
  await database.connect();
  console.log('database conectada')
};

export { database, startDatabase }