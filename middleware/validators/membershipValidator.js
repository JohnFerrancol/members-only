import { body } from 'express-validator';

const correctAnswerValidator = [
  body('answer')
    .trim()
    .notEmpty()
    .withMessage('Answer is required')
    .bail()
    .custom((value) => {
      if (value.toLowerCase() !== 'lando norris') {
        throw new Error('Wrong! Try Again!');
      }

      return true;
    }),
];

export default correctAnswerValidator;
