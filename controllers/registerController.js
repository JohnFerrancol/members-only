import bcrypt from 'bcryptjs';
import { insertUser } from '../models/usersModel.js';
import { validationResult, matchedData } from 'express-validator';
import newUserValidator from '../middleware/validators/userValidator.js';

const registerUsersGet = (req, res) => {
  res.render('register', { title: 'Register' });
};

const registerUsersPost = [
  newUserValidator,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('register', {
          title: 'Register',
          errors: errors.array(),
          formData: req.body,
        });
      }
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      await insertUser(req.body.username, hashPassword);
      res.redirect('/login');
    } catch (error) {
      return next(error);
    }
  },
];

export { registerUsersGet, registerUsersPost };
