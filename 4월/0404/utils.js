const crypto = require('crypto');

//암호화 값 출력
function getHash(pwd) {
  const hash = crypto.createHash('sha512').update(pwd).digest('base64');
  return hash;
}

module.exports = { getHash };
