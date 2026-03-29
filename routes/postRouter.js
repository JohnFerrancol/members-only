import { Router } from 'express';
import {
  newPostGet,
  newPostPost,
  deletePostGet,
  deletePostPost,
} from '../controllers/postController.js';
import { isAuth, isAdmin } from '../auth/authMiddleware.js';

const postRouter = Router();

// HTTP requests used to create new posts
postRouter.get('/', isAuth, newPostGet);
postRouter.post('/', isAuth, newPostPost);

// HTTP requests to delete existing posts when the user is the admin
postRouter.get('/:id/delete', isAdmin, deletePostGet);
postRouter.post('/:id/delete', isAdmin, deletePostPost);

export default postRouter;
