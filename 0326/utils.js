const crypto = require('crypto');
require('dotenv').config();
console.log(process.env.DB_PASSWORD);
//암호화 값 출력
function getHash(pwd) {
  const hash = crypto.createHash('sha512').update(pwd).digest('base64');
  return hash;
}

module.exports = { getHash };
