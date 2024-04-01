const express = require('express');
const { getHash, isValidateLogin, isCheckUser } = require('./utils');

const router = express.Router();

const db = new Map();
let id = 1;
db.set(id++, { userId: 'test1', pwd: 'aaa', nickName: '가' });

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
  const user = isValidateLogin(db, userId, hash);
  if (user) {
    return res //쿠키 전송
      .cookie('name', user.nickName, {
        //쿠키 유효기간 5분
        expires: new Date(Date.now() + 1000 * 60 * 5),
        httpOnly: true,
      })
      .json({ message: `${user.nickName} ㅎㅇㅎㅇ` });
  }

  res.status(404).send('일치하는 정보가 없습니다');
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

  db.set(id++, { userId, pwd: hash, nickName });
  res.json({ message: `${nickName} 회원가입 완료` });
});

//회원 조회, 탈퇴
router
  .route('/:id')
  .get((req, res) => {
    const userId = req.params.id;

    //db에서 회원이 있는지 조회
    const column = isCheckUser(db, userId);

    if (column) return res.json(column.user);

    res.status(404).send('일치하는 정보가 없습니다');
  })
  .delete((req, res) => {
    const userId = req.params.id;

    //db에서 회원이 있는지 조회
    const column = isCheckUser(db, userId);

    if (column) {
      res.json({ message: `${column.user.nickName} 님이 잘가요` });
      db.delete(column.dbId);
      return;
    }

    res.status(404).send('해당 유저가 없음');
  });

module.exports = router;
