import { validationResult, matchedData } from 'express-validator';
import newPostValidator from '../middleware/validators/postValidator.js';
import { insertPostByUserId } from '../models/postModel.js';

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

export { newPostGet, newPostPost };
