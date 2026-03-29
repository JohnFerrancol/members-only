import { Router } from 'express';
import {
  newPostGet,
  newPostPost,
  deletePostGet,
  deletePostPost,
} from '../controllers/postController.js';
import { isAuth, isAdmin } from '../auth/authMiddleware.js';

const postRouter = Router();

postRouter.get('/', isAuth, newPostGet);
postRouter.post('/', isAuth, newPostPost);

postRouter.get('/:id/delete', isAdmin, deletePostGet);
postRouter.post('/:id/delete', isAdmin, deletePostPost);

export default postRouter;
