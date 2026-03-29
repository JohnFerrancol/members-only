import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import pool from '../db/pool.js';
import 'dotenv/config';

// Creating a session via a session store in the database
const PgStore = connectPgSimple(session);

const sessionStore = new PgStore({
  pool: pool,
  tableName: 'sessions',
});

const sessionMiddleware = session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
});

export default sessionMiddleware;
