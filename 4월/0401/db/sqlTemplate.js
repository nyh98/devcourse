const fetchConn = require('./connection');

const sqlTemplate = {
  //...params 가변인자 => 1,2,3 아규먼트 입력시 [1,2,3] 배열 형태로 들어옴
  getQuery: async (sql, ...params) => {
    try {
      conn = await fetchConn();
      const rows = await conn.query(sql, params); // params = [1,2,3]
      if (!rows[0]) throw new Error('Not Found');

      return rows;
    } catch (e) {
      throw e;
    } finally {
      if (conn) conn.end();
    }
  },

  modifyQuery: async (sql, ...params) => {
    try {
      conn = await fetchConn();

      const result = await conn.query(sql, params);

      if (!result.affectedRows) throw new Error('Not Found');
      return true;
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      if (conn) conn.end();
    }
  },
};

module.exports = sqlTemplate;
