const crypto = require('crypto');

//암호화 값 출력
function getHash(pwd) {
  const hash = crypto.createHash('sha512').update(pwd).digest('base64');
  return hash;
}

//db에서 유저가 있는지
function isCheckUser(db, userId) {
  for (let [dbId, user] of db) {
    if (user.userId === userId) {
      return { user, dbId };
    }
  }
  return null;
}

//로그인 하려는 사용자 아이디,비밀번호가 맞는지
function isValidateLogin(db, userId, hash) {
  for (let [dbid, user] of db) {
    if (user.userId === userId && user.pwd === hash) {
      return user;
    }
  }
  return null;
}

module.exports = { getHash, isCheckUser, isValidateLogin };
