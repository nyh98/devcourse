const fetchConn = require('./connection');

const sqlTemplate = {
  query: async (sql, ...params) => {
    try {
      conn = await fetchConn();

      return await conn.query(sql, params);
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      if (conn) conn.end();
    }
  },

  excute: async (sql, ...params) => {
    try {
      conn = await fetchConn();

      await conn.query(sql, params);

      return true;
    } catch (e) {
      throw e;
    } finally {
      if (conn) conn.end();
    }
  },
};

module.exports = sqlTemplate;
