const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());
app.listen(5000);

const db = new Map();
let id = 1;
db.set(id++, { userId: 'test1', pwd: 'aaa', nickName: '가' });

//로그인
app.post('/login', (req, res) => {
  const { userId, pwd } = req.body;
  //데이터 검증
  if (!userId || !pwd) {
    return res.status(400).send('정보를 정확히 입력하세요');
  }

  //암호화 값
  const hash = crypto.createHash('sha512').update(pwd).digest('base64');

  //db에서 회원 검증
  for (let [id, user] of db) {
    if (user.userId === userId && user.pwd === hash) {
      res.status(200).send(`${user.nickName} ㅎㅇㅎㅇ`);
      return;
    }
  }

  res.status(404).send('일치하는 정보가 없습니다');
});

//회원가입
app.post('/join', (req, res) => {
  const { userId, pwd, nickName } = req.body;
  //데이터 검증
  if (!userId || !pwd || !nickName) {
    return res.status(400).send('데이터가 없음');
  }

  //비밀번호 암호화
  const hash = crypto.createHash('sha512').update(pwd).digest('base64');
  db.set(id++, { userId, pwd: hash, nickName });
  res.json({ message: `${nickName} 회원가입 완료` });
});

//회원 조회, 탈퇴
app
  .route('/users/:id')
  .get((req, res) => {
    const userId = req.params.id;
    for (let [id, user] of db) {
      if (user.userId === userId) {
        res.json(user);
        return;
      }
    }

    res.status(404).send('일치하는 정보가 없습니다');
  })
  .delete((req, res) => {
    const userId = req.params.id;

    for (let [id, user] of db) {
      if (user.userId === userId) {
        res.json({ message: `${user.nickName} 님이 잘가요` });
        db.delete(id);
        return;
      }
    }

    res.status(404).send('해당 유저가 없음');
  });
