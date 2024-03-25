const express = require('express');

const router = express.Router();

const channelDB = new Map();
let dbID = 1;
channelDB.set(dbID++, { channelTitle: '1번 채널', sub: 0 });

//채널 개별 조회, 채널 개별 삭제, 채널 개별 수정
router
  .route('/:channelTitle')
  .get((req, res) => {
    //채널 개별 조회
    const channelTitle = req.params.channelTitle;

    for (let [dbId, channel] of channelDB) {
      if (channel.channelTitle === channelTitle) {
        res.status(200).json(channel);
        return;
      }
    }

    res.status(404).send('찾는 채널이 없습니다');
  })
  .put((req, res) => {
    // 체널 개별 수정
    const targetTitle = req.params.channelTitle;

    if (!targetTitle || !req.body) {
      return res.status(400).send('데이터를 정확히 입력하세요');
    }

    const afterTitle = req.body.channelTitle;

    for (let [dbId, channel] of channelDB) {
      if (channel.channelTitle === targetTitle) {
        channel.channelTitle = targetTitle;
        channelDB.set(dbId, channel);
        res.json({
          message: `${targetTitle} => ${afterTitle} 으로 채널명 변경 완료`,
        });
        return;
      }
    }
    res.status(404).send('수정할 채널이 없습니다');
  })
  .delete((req, res) => {
    // 체널 개별 삭제
    const channelTitle = req.params.channelTitle;

    for (let [dbId, channel] of channelDB) {
      if (channel.channelTitle === channelTitle) {
        res.json({
          message: `${channel.channelTitle}  잘가요...`,
        });
        channel.delete(dbId);
        return;
      }
    }

    res.status(404).send('삭제할 채널이 없습니다');
  });

//채널 생성, 채널 전체 조회
router
  .route('/')
  .post((req, res) => {
    //채널 생성
    const newChannel = req.body;

    for (let [dbId, channel] of channelDB) {
      if (channel.channelTitle === newChannel.channelTitle) {
        res.status(400).send('이미 사용하고 있는 채널명 입니다');
        return;
      }
    }
    channelDB.set(dbID++, newChannel);
    res
      .status(201)
      .json({ message: `${newChannel.channelTitle} 채널 생성 완료` });
  })
  .get((req, res) => {
    if (channelDB.size === 0) return res.status(404).send('db가 비어있습니다');

    const allChannels = [];
    for (let [dbId, channel] of channelDB) {
      allChannels.push(channel);
    }

    res.status(200).json(allChannels);
  }); //채널 전체 조회

module.exports = router;
