import { Router } from 'express';
import {
  loginUsersGet,
  loginUsersPost,
} from '../controllers/loginController.js';

const loginRouter = Router();

// HTTP requests to log in the user
loginRouter.get('/', loginUsersGet);
loginRouter.post('/', loginUsersPost);

export default loginRouter;
