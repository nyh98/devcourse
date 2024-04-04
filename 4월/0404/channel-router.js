const express = require('express');
const sqlTemplate = require('./db/sqlTemplate');
const Validator = require('./validator/user-validator');
const { validationResult } = require('express-validator');
const channelController = require('./controller/channelController');

const router = express.Router();

//채널 개별 조회, 채널 개별 삭제, 채널 개별 수정
router
  .route('/:id')
  .get(channelController.getChannel) //채널 개별 조회
  .put(channelController.updated) // 체널 개별 수정
  .delete(channelController.deleted); // 체널 개별 삭제

//채널 생성, 채널 전체 조회
router
  .route('/')
  .post(
    //채널 생성
    Validator.isStringFromBody('channelTitle, userId'),
    channelController.created
  )
  .get(channelController.getAll); //채널 전체 조회

module.exports = router;
