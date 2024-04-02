const express = require('express');
const { getHash } = require('./utils');
const sqlTemplate = require('./db/sqlTemplate');
const validator = require('./validator/user-validator');
const { validationResult } = require('express-validator');

const router = express.Router();
// userValidator.isStr('userId', 'pwd'),
// userValidator.isValidResult,

//로그인
router.post(
  '/login',
  validator.isStringFromBody('userId', 'pwd'),
  (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).send('유효성 검증 실패');
    }

    const { userId, pwd } = req.body;

    //암호화 값
    const hashPwd = getHash(pwd);

    let sql = 'SELECT * FROM users WHERE id = ? AND pwd = ?';
    let cookieOption = {
      //쿠키 유효기간 5분
      expires: new Date(Date.now() + 1000 * 60 * 5),
      httpOnly: true,
    };
    sqlTemplate
      .getQuery(sql, userId, hashPwd)
      .then(rows =>
        res
          .cookie('name', rows[0].nick_name, cookieOption)
          .json({ message: `${rows[0].nick_name} ㅎㅇㅎㅇ` })
      )
      .catch(e => {
        console.log(e);
        res.status(404).send('로그인 실패');
      });
  }
);

//회원가입
router.post(
  '/join',
  validator.isStringFromBody('userId', 'pwd', 'nickName'),
  (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).send('유효성 검증 실패');
    }

    const { userId, pwd, nickName } = req.body;

    //비밀번호 암호화
    const hashPwd = getHash(pwd);

    let sql = 'INSERT INTO users (id,pwd,nick_name) VALUES(?, ?, ?)';

    sqlTemplate
      .modifyQuery(sql, userId, hashPwd, nickName)
      .then(result => {
        res.json({ message: `${nickName} 회원가입 완료` });
      })
      .catch(e => {
        res.status(400).send('회원가입 실패 중복된 아이디가 있을 수 있음');
      });
  }
);

//회원 조회, 탈퇴
router
  .route('/:id')
  .get(validator.isStringFromParam('userId'), (req, res) => {
    const userId = req.params.id;

    if (!userId) return res.status(400).send('데이터 없음');

    let sql = 'SELECT id, nick_name FROM users WHERE id = ?';

    sqlTemplate
      .getQuery(sql, userId)
      .then(rows => {
        res.json(rows[0]);
      })
      .catch(e => {
        res.status(404).send('조회 실패');
      });
  })
  .delete(validator.isStringFromParam('userId'), (req, res) => {
    const userId = req.params.id;

    if (!userId) return res.status(400).send('데이터 없음');

    let sql = 'DELETE FROM users WHERE id = ?';
    sqlTemplate
      .modifyQuery(sql, userId)
      .then(result => res.json({ message: `회원 탈퇴 완료` }))
      .catch(e => {
        res.status(404).send('일치하는 정보가 없음');
      });
  });

module.exports = router;
