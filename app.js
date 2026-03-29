import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import flash from 'connect-flash';
import 'dotenv/config';

import passport from './auth/passport.js';
import sessionMiddleware from './auth/session.js';

import createLocals from './middleware/createLocals.js';
import errorHandler from './middleware/errorHandler.js';

import indexRouter from './routes/indexRouter.js';
import loginRouter from './routes/loginRouter.js';
import registerRouter from './routes/registerRouter.js';
import logoutRouter from './routes/logoutRouter.js';
import memberRouter from './routes/memberRouter.js';
import postRouter from './routes/postRouter.js';

const app = express();

// Get filename, dirname and assetPaths for CSS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'public');

// Let Express App use Express Layouts and static files
app.use(expressLayouts);
app.use(express.static(assetsPath));

// Use the express-session, passport and flash middlewares
app.use(sessionMiddleware);
app.use(flash());
app.use(passport.session());

// Parse incoming POST request data to be converted into a useable JS object
app.use(express.urlencoded({ extended: true }));

// Set Views engine and Express layout
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layout');

// Put the reuable locals in the createLocals middleware function
app.use(createLocals);

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/logout', logoutRouter);
app.use('/member', memberRouter);
app.use('/post', postRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express Server - listening on port ${PORT}`);
});
