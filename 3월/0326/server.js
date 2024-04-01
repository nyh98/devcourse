const express = require('express');
const userRouter = require('./user-router');
const cookieParser = require('cookie-parser');
const path = require('path');
const channelRouter = require('./channel-router');
const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/channels', channelRouter);
app.use(cookieParser('secret')); //cookieParser 미들웨어

//루트 경로
app.get('/', (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  if (cookie.name) return res.send(`${cookie.name} 님 하이요`);

  const htmlPath = path.join(__dirname, '../index.html');
  res.sendFile(htmlPath);
});

app.get(
  '/z',
  (req, res, next) => {
    throw Error('에러발생');
  },
  (err, req, res, next) => {
    console.log('핸들러 들어옴');
    console.log(err);
    res.send(err);
  }
);

app.use((err, req, res, next) => {
  console.log('에러 라우터 들어옴');
  console.log(err);
  res.send(err);
});
const port = 5000;
app.listen(port, () => {
  console.log(`open Server port ${port}`);
});
