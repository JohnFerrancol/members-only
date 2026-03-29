import bcrypt from 'bcryptjs';
import { insertUser } from '../models/usersModel.js';
import { validationResult, matchedData } from 'express-validator';
import newUserValidator from '../middleware/validators/userValidator.js';

// Middleware used the render the form to register a new user
const registerUsersGet = (req, res) => {
  res.render('register', { title: 'Register' });
};

// Middleware used to process and validate the data from the form using express-validator and inserting the new user to the database
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
      const { username } = matchedData(req);
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      await insertUser(username, hashPassword);
      res.redirect('/login');
    } catch (error) {
      return next(error);
    }
  },
];

export { registerUsersGet, registerUsersPost };
