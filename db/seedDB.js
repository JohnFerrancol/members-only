import { Client } from 'pg';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

// SQL Queries to add dummy data and add the tables
const createTables = `
  CREATE TABLE IF NOT EXISTS sessions (
    "sid" VARCHAR(255) NOT NULL PRIMARY KEY,
    "sess" JSON NOT NULL,
    "expire" TIMESTAMP(6) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_member BOOLEAN DEFAULT FALSE NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- Reset
  TRUNCATE posts, users, sessions RESTART IDENTITY CASCADE;
`;

const insertAdmin = `
  -- Admin
  INSERT INTO users (username, password, is_member, is_admin) 
  VALUES ('JohnFerrancol15', $1, TRUE, TRUE);
`;

const insertUsers = `
  -- Users
  INSERT INTO users (username, password, is_member) 
  VALUES
    ('MaxVerstappen33', $1, TRUE),
    ('CharlesLeclerc16', $1, TRUE),
    ('LewisHamilton44', $1, TRUE),
    ('LandoNorris4', $1, TRUE);
`;

const insertPosts = `
  -- Posts
  INSERT INTO posts (title, content, user_id)
  VALUES
    ('Max? What happened?', 'It''s just unfair, He push me and I push him back', (SELECT id FROM users WHERE username = 'MaxVerstappen33')),
    ('Charles! What happened with Max?', 'Nothing, just an incident.', (SELECT id FROM users WHERE username = 'CharlesLeclerc16')),
    ('Say that again?', 'I''m just useless!', (SELECT id FROM users WHERE username = 'LewisHamilton44')),
    ('Radio Check?', 'It''s Friday then it''s Saturday Sunday!', (SELECT id FROM users WHERE username = 'LandoNorris4'));
`;

// Run the function to add the dummy data and the tables to the database
const main = async () => {
  console.log('Seeding Inventory Application Database....');
  const client = new Client({ connectionString: process.env.DB_URL });

  try {
    await client.connect();
    await client.query(createTables);
    const hashedPassword = await bcrypt.hash(process.env.DUMMY_PASSWORD, 10);
    await client.query(insertAdmin, [hashedPassword]);
    await client.query(insertUsers, [hashedPassword]);
    await client.query(insertPosts);

    console.log('Done');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
};

main();
