const express = require('express');
const sqlTemplate = require('./db/sqlTemplate');

const router = express.Router();

//채널 개별 조회, 채널 개별 삭제, 채널 개별 수정
router
  .route('/:id')
  .get((req, res) => {
    //채널 개별 조회
    const channelId = parseInt(req.params.id);
    let sql = 'SELECT * FROM channels WHERE title = ?';

    sqlTemplate
      .getQuery(sql, channelId)
      .then(result => res.json(result))
      .catch(e => res.status(404).send('일치하는 정보가 없음'));
  })
  .put((req, res) => {
    // 체널 개별 수정
    const channelId = req.params.id;
    const afterTitle = req.body.channelTitle;
    if (!channelId || !afterTitle) {
      return res.status(400).send('데이터를 정확히 입력하세요');
    }

    let sql = 'UPDATE channels SET title = ? WHERE id = ?';

    sqlTemplate
      .modifyQuery(sql, afterTitle, channelId)
      .then(() =>
        res.json({
          message: `${afterTitle} 으로 채널명 변경 완료`,
        })
      )
      .catch(e => res.status(404).send('일치하는 정보가 없음'));
  })
  .delete((req, res) => {
    // 체널 개별 삭제
    const channelId = req.params.id;

    let sql = 'DELETE FROM channels WHERE id = ?';

    sqlTemplate
      .modifyQuery(sql, channelId)
      .then(() =>
        res.json({
          message: `채널 삭제 완료`,
        })
      )
      .catch(e => res.status(404).send('일치하는 정보가 없음'));
  });

//채널 생성, 채널 전체 조회
router
  .route('/')
  .post((req, res) => {
    //채널 생성
    const { channelTitle, userId } = req.body;

    let sql =
      'INSERT INTO channels (title, sub_num, video_num, user_id) VALUES(?, 0, 0, ?)';

    sqlTemplate
      .modifyQuery(sql, channelTitle, userId)
      .then(() =>
        res.status(201).json({ message: `${channelTitle} 채널 생성 완료` })
      )
      .catch(e => res.status(400).send('채널 생성 실패'));
  })
  .get((req, res) => {
    //채널 전체 조회
    let sql = 'SELECT * FROM channels';

    sqlTemplate
      .getQuery(sql)
      .then(channel => {
        res.status(200).json(channel);
      })
      .catch(e => res.status(404).send('조회 실패'));
  });

module.exports = router;
