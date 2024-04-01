const fetchConn = require('./connection');

//회원가입
async function joinUser(userId, hashPwd, nickName) {
  let conn;

  try {
    conn = await fetchConn();
    await conn.query('INSERT INTO users (id,pwd,nick_name) VALUES(?, ?, ?)', [
      userId,
      hashPwd,
      nickName,
    ]);
    return true;
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

//로그인
// async function login(userId, hashPwd) {
//   let conn;

//   try {
//     conn = await fetchConn();

//     const rows = await conn.query(
//       'SELECT * FROM users WHERE id = ? AND pwd = ?',
//       [userId, hashPwd]
//     );
//     if (!rows[0]) throw new Error('로그인 정보가 올바르지 않음');

//     return rows[0];
//   } catch (e) {
//     throw e;
//   } finally {
//     if (conn) conn.end();
//   }
// }

async function login(userId, hashPwd) {
  const sqlTemplate = require('./utils');
  const rows = await sqlTemplate.query(
    'SELECT * FROM users WHERE id = ? AND pwd = ?',
    userId,
    hashPwd
  );
  console.log('asdasd');
  console.log(rows[0]);
  return rows[0];
}

//회원 조회
async function getUser(userId) {
  let conn;

  try {
    conn = await fetchConn();

    const rows = await conn.query(
      'SELECT id, nick_name FROM users WHERE id = ?',
      [userId]
    );

    if (!rows[0]) throw new Error('유저를 찾을 수 없음');

    return rows[0];
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

//회원 탈퇴
async function deleteUser(userId) {
  let conn;

  try {
    conn = await fetchConn();

    const result = await conn.query('DELETE FROM users WHERE id = ?', [userId]);
    if (!result.affectedRows) throw new Error('삭제할 아이디가 없음');
    return true;
  } catch (e) {
    throw e;
  } finally {
    if (conn) conn.end();
  }
}

module.exports = { joinUser, login, getUser, deleteUser };
