import { Router } from 'express';
import {
  registerUsersGet,
  registerUsersPost,
} from '../controllers/registerController.js';

const registerRouter = Router();

// HTTP requests used to register new users
registerRouter.get('/', registerUsersGet);
registerRouter.post('/', registerUsersPost);

export default registerRouter;
