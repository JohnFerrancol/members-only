import { Router } from 'express';
import { logoutUserGet } from '../controllers/logoutController.js';
import { isAuth } from '../auth/authMiddleware.js';

const logoutRouter = Router();

logoutRouter.get('/', isAuth, logoutUserGet);

export default logoutRouter;
