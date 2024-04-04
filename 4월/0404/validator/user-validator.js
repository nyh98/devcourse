const { body, param } = require('express-validator');

const Validator = {
  isStringFromBody: (...validTargets) => {
    return body(validTargets)
      .notEmpty()
      .isString()
      .withMessage('밸리데이터에서 걸림 문자열이 아님');
  },
};

module.exports = Validator;
