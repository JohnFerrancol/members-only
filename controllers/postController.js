import { validationResult, matchedData } from 'express-validator';
import newPostValidator from '../middleware/validators/postValidator.js';
import {
  insertPostByUserId,
  getPostById,
  deletePostById,
} from '../models/postModel.js';

// Middleware used to render the form to create a new post
const newPostGet = (req, res) => {
  res.render('post', { title: 'Post' });
};

// Middleware used to process and validate the data from the form using express-validator and inserting the new post to the database
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

// Middleware used to render the dialog to confirm with the user to delete the post
const deletePostGet = async (req, res) => {
  const postToDelete = await getPostById(req.params.id);
  res.render('index', {
    title: 'Index',
    user: req.user,
    showDeleteDialog: true,
    postToDelete: postToDelete,
  });
};

// Middleware used to run delete the selected post in the database
const deletePostPost = async (req, res) => {
  const postId = req.params.id;
  await deletePostById(postId);
  res.redirect('/');
};

export { newPostGet, newPostPost, deletePostGet, deletePostPost };
