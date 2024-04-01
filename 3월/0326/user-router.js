const express = require('express');
const { getHash } = require('./utils');
const { joinUser, login, getUser, deleteUser } = require('./db/user-query');

const router = express.Router();

//로그인
router.post('/login', (req, res) => {
  const { userId, pwd } = req.body;

  //데이터 검증
  if (!userId || !pwd) {
    return res.status(400).send('정보를 정확히 입력하세요');
  }

  //암호화 값
  const hash = getHash(pwd);

  //db에서 회원 검증
  login(userId, hash)
    .then(user =>
      res //쿠키 전송
        .cookie('name', user.nick_name, {
          //쿠키 유효기간 5분
          expires: new Date(Date.now() + 1000 * 60 * 5),
          httpOnly: true,
          signed: true,
        })
        .json({ message: `${user.nick_name} ㅎㅇㅎㅇ` })
    )
    .catch(e => {
      res.status(404).send(e);
    });
});

//회원가입
router.post('/join', (req, res) => {
  const { userId, pwd, nickName } = req.body;
  //데이터 검증
  if (!userId || !pwd || !nickName) {
    return res.status(400).send('데이터가 없음');
  }

  //비밀번호 암호화
  const hash = getHash(pwd);

  joinUser(userId, hash, nickName)
    .then(result => {
      res.json({ message: `${nickName} 회원가입 완료` });
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

//회원 조회, 탈퇴
router
  .route('/:id')
  .get((req, res) => {
    const userId = req.params.id;

    //db에서 회원 조회
    getUser(userId)
      .then(user => {
        res.json(user);
        console.log('성공', user);
      })
      .catch(e => {
        res.status(404).send(e);
      });
  })
  .delete((req, res) => {
    const userId = req.params.id;

    //db에서 회원 삭제
    deleteUser(userId)
      .then(result => res.json({ message: `회원 탈퇴 완료` }))
      .catch(e => {
        res.status(404).send(e);
      });
  });

module.exports = router;
