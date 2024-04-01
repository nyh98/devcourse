const fetchConn = require('./connection');

//채널 생성
async function createChannel(channelTitle, user_id) {
  let conn;

  try {
    conn = await fetchConn();

    await conn.query(
      'INSERT INTO channels (title, sub_num, video_num, user_id) VALUES(?, 0, 0, ?)',
      [channelTitle, user_id]
    );

    return true;
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

//채널 개별 삭제
async function deleteChannel(channelId) {
  let conn;

  try {
    conn = await fetchConn();

    const result = await conn.query('DELETE FROM channels WHERE id = ?', [
      channelId,
    ]);
    if (!result.affectedRows) throw new Error('삭제할 채널이 없음');
    return true;
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

//채널 개별 수정
async function updateChannel(afterTitle, channelId) {
  let conn;

  try {
    conn = await fetchConn();

    const result = await conn.query(
      'UPDATE channels SET title = ? WHERE id = ?',
      [afterTitle, channelId]
    );
    if (!result.affectedRows) throw new Error('변경할 채널을 찾지 못함');
    return true;
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

//채널 전체 조회
async function getChannelAll() {
  let conn;

  try {
    conn = await fetchConn();

    const rows = await conn.query('SELECT * FROM channels');
    if (!rows[0]) throw new Error('조회할 채널이 없음');
    return rows;
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

//채널 개별 조회
async function getChannel(channelId) {
  let conn;

  try {
    conn = await fetchConn();

    const rows = await conn.query('SELECT * FROM channels WHERE title = ?', [
      channelId,
    ]);
    if (!rows[0]) throw new Error('해당 채널이 없음');
    return rows[0];
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

module.exports = {
  getChannel,
  createChannel,
  deleteChannel,
  updateChannel,
  getChannelAll,
};
