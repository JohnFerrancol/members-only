import { body } from 'express-validator';

const newPostValidator = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 5, max: 70 })
    .withMessage('Title has must be 5-70 characters long'),
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Content is required')
    .isLength({ min: 5, max: 200 })
    .withMessage('Content must be 5-200 characters long'),
];

export default newPostValidator;
