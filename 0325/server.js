const express = require('express');
const userRouter = require('./user-router');
const cookieParser = require('cookie-parser');

const path = require('path');
const channelRouter = require('./channel-router');
const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/channels', channelRouter);
app.use(cookieParser()); //cookieParser 미들웨어

//루트 경로
app.get('/', (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);
  const htmlPath = path.join(__dirname, '../index.html');
  res.sendFile(htmlPath);
});

const port = 5000;
app.listen(port, () => {
  console.log(`open Server port ${port}`);
});
