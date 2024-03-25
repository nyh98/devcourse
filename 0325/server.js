const express = require('express');
const userRouter = require('./user-router');
const channelRouter = require('./channel-router');
const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/channels', channelRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`open Server port ${port}`);
});
