import { Router } from 'express';
import { getMembershipPost } from '../controllers/memberController.js';
import { isAuth } from '../auth/authMiddleware.js';

const memberRouter = Router();

// HTTP request used to give membership access to the user
memberRouter.post('/', isAuth, getMembershipPost);

export default memberRouter;
