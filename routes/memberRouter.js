import { Router } from 'express';
import { getMembershipPost } from '../controllers/memberController.js';
import { isAuth } from '../auth/authMiddleware.js';

const memberRouter = Router();

memberRouter.post('/', isAuth, getMembershipPost);

export default memberRouter;
