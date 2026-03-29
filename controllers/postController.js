import { validationResult, matchedData } from 'express-validator';
import newPostValidator from '../middleware/validators/postValidator.js';
import {
  insertPostByUserId,
  getPostById,
  deletePostById,
} from '../models/postModel.js';

const newPostGet = (req, res) => {
  res.render('post', { title: 'Post' });
};

const newPostPost = [
  newPostValidator,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('post', {
        title: 'Post',
        errors: errors.array(),
        formData: req.body,
      });
    }
    const { title, content } = matchedData(req);
    await insertPostByUserId(title, content, req.user.id);
    res.redirect('/');
  },
];

const deletePostGet = async (req, res) => {
  const postToDelete = await getPostById(req.params.id);
  res.render('index', {
    title: 'Index',
    user: req.user,
    showDeleteDialog: true,
    postToDelete: postToDelete,
  });
};

const deletePostPost = async (req, res) => {
  const postId = req.params.id;
  await deletePostById(postId);
  res.redirect('/');
};

export { newPostGet, newPostPost, deletePostGet, deletePostPost };
