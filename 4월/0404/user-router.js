const express = require('express');
const { getHash } = require('./utils');
const sqlTemplate = require('./db/sqlTemplate');
const validator = require('./validator/user-validator');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const userController = require('./controller/userController');
require('dotenv').config();

const router = express.Router();
// userValidator.isStr('userId', 'pwd'),
// userValidator.isValidResult,

//로그인
router.post(
  '/login',
  validator.isStringFromBody('userId', 'pwd'),
  userController.login
);

//회원가입
router.post(
  '/join',
  validator.isStringFromBody('userId', 'pwd', 'nickName'),
  userController.join
);

//회원 조회, 탈퇴
router.route('/:id').get(userController.getUser).delete(userController.deleted);

module.exports = router;
