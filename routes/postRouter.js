import { Router } from 'express';
import { newPostGet, newPostPost } from '../controllers/postController.js';
import { isAuth } from '../auth/authMiddleware.js';

const postRouter = Router();

postRouter.get('/', isAuth, newPostGet);
postRouter.post('/', isAuth, newPostPost);

export default postRouter;
