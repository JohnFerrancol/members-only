import { Client } from 'pg';
import 'dotenv/config';

const SQL = `
    -----------------------------------------------------
    -- Create sessions table
    -- --------------------------------------------------
    CREATE TABLE IF NOT EXISTS sessions (
      "sid" VARCHAR(255) NOT NULL PRIMARY KEY COLLATE "default",
      "sess" JSON NOT NULL,
      "expire" TIMESTAMP(6) NOT NULL
    );

    -----------------------------------------------------
    -- Create users table
    -- --------------------------------------------------
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username VARCHAR(50) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
`;

// Run the function to add the dummy data and the tables to the database
const main = async () => {
  console.log('Seeding Inventory Application Database....');
  const client = new Client({ connectionString: process.env.DB_URL });

  try {
    await client.connect();
    await client.query(SQL);
    console.log('Done');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
};

main();
