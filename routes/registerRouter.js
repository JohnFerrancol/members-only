import { Router } from 'express';
import {
  registerUsersGet,
  registerUsersPost,
} from '../controllers/registerController.js';

const registerRouter = Router();

registerRouter.get('/', registerUsersGet);
registerRouter.post('/', registerUsersPost);

export default registerRouter;
