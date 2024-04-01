const express = require('express');
const {
  getChannel,
  createChannel,
  getChannelAll,
  deleteChannel,
  updateChannel,
} = require('./db/channel-query');
const router = express.Router();

//채널 개별 조회, 채널 개별 삭제, 채널 개별 수정
router
  .route('/:id')
  .get((req, res) => {
    //채널 개별 조회

    const channelId = parseInt(req.params.id);
    getChannel(channelId)
      .then(result => res.json(result))
      .catch(e => res.status(404).send(e));
  })
  .put((req, res) => {
    // 체널 개별 수정
    const channelId = req.params.id;
    const afterTitle = req.body.channelTitle;
    if (!channelId || !afterTitle) {
      return res.status(400).send('데이터를 정확히 입력하세요');
    }

    updateChannel(afterTitle, channelId) //
      .then(() =>
        res.json({
          message: `${afterTitle} 으로 채널명 변경 완료`,
        })
      )
      .catch(e => res.status(404).send(e));
  })
  .delete((req, res) => {
    // 체널 개별 삭제
    const channelId = req.params.id;

    deleteChannel(channelId) //
      .then(() =>
        res.json({
          message: `채널 삭제 완료`,
        })
      )
      .catch(e => res.status(404).send(e));
  });

//채널 생성, 채널 전체 조회
router
  .route('/')
  .post((req, res) => {
    //채널 생성
    const { channelTitle, userId } = req.body;
    createChannel(channelTitle, userId)
      .then(() =>
        res.status(201).json({ message: `${channelTitle} 채널 생성 완료` })
      )
      .catch(e => res.status(400).send(e));
  })
  .get((req, res) => {
    //채널 전체 조회
    getChannelAll()
      .then(channel => {
        console.log(channel);
        res.status(200).json(channel);
      })
      .catch(e => res.status(404).send(e));
  });

module.exports = router;
