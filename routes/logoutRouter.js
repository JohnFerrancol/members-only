import { Router } from 'express';
import { logoutUserGet } from '../controllers/logoutController.js';
import { isAuth } from '../auth/authMiddleware.js';

const logoutRouter = Router();

// HTTP requests to log out the user
logoutRouter.get('/', isAuth, logoutUserGet);

export default logoutRouter;
