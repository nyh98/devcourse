const express = require('express');
const userRouter = require('./user-router');
const cookieParser = require('cookie-parser');
const path = require('path');
const channelRouter = require('./channel-router');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/channels', channelRouter);
app.use(cookieParser('secret')); //cookieParser 미들웨어

//루트 경로
app.get('/', (req, res) => {
  const cookie = req.cookies;

  if (cookie.JWT) {
    const decoded = jwt.verify(cookie.JWT, process.env.SECRET_KEY, err => {
      if (err) return res.send('내 서버 쿠키 아님요');
    });
    return res.send(`${decoded.user} 님 하이요`);
  }

  res.send('홈입니다');
});

const port = 5000;
app.listen(port, () => {
  console.log(`open Server port ${port}`);
});
