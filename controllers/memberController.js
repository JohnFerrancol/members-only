import { updateUserMembershipById } from '../models/usersModel.js';
import correctAnswerValidator from '../middleware/validators/membershipValidator.js';
import { validationResult } from 'express-validator';

const getMembershipPost = [
  correctAnswerValidator,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('index', {
        title: 'Index',
        errors: errors.array(),
        formData: req.body,
      });
    }
    const userId = req.user.id;
    await updateUserMembershipById(userId);
    res.redirect('/');
  },
];

export { getMembershipPost };
