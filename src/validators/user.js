import { check } from 'express-validator';
import validOrAbort from '../middlewares/validate';

export default function (services, db) {
  return {
    userCreate: [
      check('data').isObject().withMessage('validators.data.exist'),
      check('data.email')
        .exists()
        .withMessage('validator.data.email.isRequired')
        .isEmail()
        .normalizeEmail()
        .withMessage('vaildators.data.email.isEmail'),
      check('data.userName')
        .trim()
        .exists()
        .withMessage('validators.data.userName.isRequired'),
      check('data.password')
        .exists()
        .withMessage('validators.data.password.isRequired'),
      check('data.passwordConfirmation')
        .exists()
        .withMessage('validators.data.passwordConfirmation.isRequired')
        .custom((value, { req }) => value === req.body.data.password)
        .withMessage('validators.password.notMatch'),
      validOrAbort,
    ],
    userUpdate: [],
  };
}
