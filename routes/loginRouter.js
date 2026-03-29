import { Router } from 'express';
import {
  loginUsersGet,
  loginUsersPost,
} from '../controllers/loginController.js';

const loginRouter = Router();

loginRouter.get('/', loginUsersGet);
loginRouter.post('/', loginUsersPost);

export default loginRouter;
